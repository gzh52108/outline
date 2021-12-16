# Vue3
2020-9正式发布（目前最新稳定版为：3.2）,兼容Vue2大部分特性

### 特点
* 支持`Tree-sharking` 按需编译，代码打包大小减少41%
* 渲染更快（首次渲染快55%，更新渲染快133%）
* 内存占用减少54%
* 使用ES6的`proxy`替代`Object.defineProperty()`32实现响应式属性
* 重写虚拟DOM
* diff算法优化
* hoistStatic静态提升
* 事件监听器缓存
* 新增`Composition API`并兼容`Option API`

### 为什么要使用Vue3
* 组件逻辑膨胀导致的可读性变差
* 无法跨组件重用代码
* Vue2对TS的支持有限

## 安装
* CDN
    > https://unpkg.com/vue@next
* 下载 Js 文件并引用
* npm 安装
    > 手动配置开发环境（如：webpack）
    ```bash
        npm install vue@next
    ```
* CLI命令行工具
    * `@vue/cli` v4.5+
        ```bash
            vue create <project-name>
        ```
    * `Vite`
        ```bash
            #npm
            npm init vite <project-name>
            #yarn
            yarn create vite <project-name>
        ```
## 使用

### 创建与挂载
* `Vue.createApp(options[,rootProps])`   创建一个应用，该方法返回一个**应用实例**，实例中包含全局方法
    * options: 根组件选项（查看组件选项）
    * rootProps: 传入根组件的props
        > 包含组件 prop、attributes 和事件监听器
* `app.mount(el)`   把一个 Vue 应用挂载到el元素，该方法返回**根组件实例**
    * el: 应用挂载目标，可以是选择器或节点
        > el元素的 `innerHTML` 将被替换为应用根组件的模板渲染结果（Vue2是`outerHTML`）
    
```js
    // 
    const app = Vue.createApp({
        data(){
            return {
                counter:1
            }
        }
    })

    const vm = app.mount('#app')
```

### 模板语法
> Vue采用基于 HTML 的模板语法，允许开发者**声明式**地将 DOM 与组件实例的数据进行绑定

#### 数据渲染
* 渲染到元素内容
    * {{}}：Mustache插值
    * v-text
    * v-html
* 渲染到元素属性：v-bind
    > Vue在用 `v-bind` 绑定 `class` 和 `style` 属性时做了专门的增强，让这两个属性支持数组与对象
* 双向数据绑定：v-model
    * 一般用于`<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定，是v-on与v-bind的语法糖
        * text 和 textarea 元素使用 value property 和 input 事件；
        * checkbox 和 radio 使用 checked property 和 change 事件；
            > 多个checkbox或radios时，绑定value值到同一个数组
        * select 元素使用 value property 和 change 事件。
        ```html
            <input v-model="searchText" />
            <!-- 等价于 -->
            <input :value="searchText" @input="searchText = $event.target.value" />
        ```
    * 在组件上使用 v-model
        ```html
            <custom-input v-model="searchText"></custom-input>
            <!-- 等效于 -->
            <custom-input
            :model-value="searchText"
            @update:model-value="searchText = $event"
            ></custom-input>

        ```
        > 在组件内使用`props`接收`modelValue`，使用`emits`设置`update:modelValue`自定义事件，以及通过`$emit()`触发值的改变
    * v-model参数
        > 默认情况下，组件上的 v-model 使用 `modelValue` 作为 prop 和 `update:modelValue` 作为事件，可以通过向 v-model 传递参数来修改这些名称
        ```html
            <custom-input v-model:keyword="searchText" v-model:page="1"></custom-input>
        ```
    * v-model修饰符
        > 在 添加到组件 v-model 的修饰符将通过 `modelModifiers` prop 提供给组件
        ```js
            <my-component v-model.capitalize="myText"></my-component>

            app.component('my-component', {
                props: {
                    modelValue: String,
                    modelModifiers: {
                        default: () => ({})
                    }
                },
                emits: ['update:modelValue'],
                methods: {
                    emitValue(e) {
                        let value = e.target.value
                        if (this.modelModifiers.capitalize) {
                            value = value.charAt(0).toUpperCase() + value.slice(1)
                        }
                        this.$emit('update:modelValue', value)
                    }
                },
                template: `<input
                    type="text"
                    :value="modelValue"
                    @input="emitValue">`
            })
        ```

#### 条件渲染
* v-if
* v-else-if
* v-else
* v-show
* 三元运算
#### 列表渲染: v-for
> 可遍历数组、对象、字符串、数字等数据类型，格式如下：
* `v-for="<item> in <data>"`
* `v-for="<item> of <data>"`

#### 事件绑定: v-on
> 格式：`v-on:click="handle"`
* 修饰符

## 指令Directives
> 完整格式：v-指令:参数.修饰符="值"

* 常用指令
    * v-text
    * v-html
    * v-bind
    * v-model
    * v-for
    * v-on
    * v-show
    * v-if
    * v-else
    * v-else-if
    * v-slot
    * v-pre
    * v-cloak
    * v-once
    * v-memo
* 自定义指令
    * 全局：`app.directive()`
    * 局部: `directives:{}`
* 参数
    * 动态参数
* 修饰符
    

### 修饰符
* 事件修饰符
    * .stop
    * .prevent
    * .capture
    * .self
    * .once
    * .passive
* 键盘按键修饰符
    * .enter
    * .tab
    * .delete (捕获“删除”和“退格”键)
    * .esc
    * .space
    * .up
    * .down
    * .left
    * .right
* 鼠标按钮修饰符
    * .left
    * .right
    * .middle
* 系统修饰键
    * .ctrl
    * .alt
    * .shift
    * .meta
    * .exact
* v-model修饰符
    * .lazy
    * .number
    * .trim

## 组件Component
虽然我们可以只用createApp()创建的根组件完成所有功能，但这样不利于复用与维护，实际开发中我们一般会把一个应用拆分成若干独立的小模块，即组件，然后通过一定的规则组合成一个完整的应用

### 定义
* 分类
    * 全局组件：`app.component(name[,definition])`
        * name: 支持 `kebab-case` 和 `PascalCase`
    * 局部组件：`components:{name:definition}`

### definition组件选项（选项式 API ）：
> 兼容大部分Vue2选项

* data: 组件数据，定义在data中的属性会成为组件实例的属性
* props:一个用于从父组件接收数据的数组或对象
    > 可使用Object类型进行类型校验
* computed: 计算属性，计算结果会被缓存
    > 只有依赖的数据发生变化时才会重新计算
* methods
* watch 
    > 自定义侦听器，一种更通用的方式来观察和响应当前活动的实例上的数据变动
* template
    > 支持多个根元素，实际Vue 应用中，一般使用**单文件组件**而不是template模板
* render
    > Vue 将模板编译成虚拟 DOM 的渲染函数，如果熟悉虚拟 DOM，你也可以不用模板语法，直接编写渲染函数 (render) ，使用可选的 JSX 语法（需要安装：`@vue/babel-plugin-jsx`）
    * 配合`Vue.h(tag,props,children)`实现虚拟节点的创建

* 生命周期钩子（详情）
    > Vue2中的`beforeDestroy`与`destroyed`改成`beforeUnmount`与`unmounted`
* emits
    > 默认情况下自定义事件会自动继承到组件根元素（故原生事件自动生效），设置`emits`后的事件则不会继承，且也不会出现在`$attrs`属性中，组件中需要手动设置`$emit()`去触发事件
* expose: 限制组件实例对外可以访问的 property
    > 默认情况下通过$ref或$parent得到的组件实现可以访问组件的所有property
* setup（详情）
    > 组合式 API 的入口点

        
### 组件实例属性/方法
* `$`内部属性
* `_`私有属性
* data选项属性
* methods选项中定义的方法会自动成为组件实例的方法

### 使用
> 由于 W3C 规范限制，直接在 DOM (即非字符串的模板) 中使用组件时必须使用 kebab-case 命名组件
* props通讯
    * 静态数据
    * 动态数据
    * 传入对象所有属性
    * 单向数据流
        > 单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行
* 非 Props 属性
    > 是指一个传入组件的props，但组件中并没有相应 props 或 emits 定义的 attribute
    * 单个根节点：这些props默认会自动继承到根节点的html属性（可通过 `inheritAttrs: false` 关闭继承）
    * 多个根节点：需显性通过 `$attrs` 绑定到某个根节点，否则发出警告
* 在组件中使用v-model
    > 默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件。我们可以通过向 v-model 传递参数来修改这些名称
    * modelValue
    * update:modelValue
    ```html
        <my-component v-model:title="bookTitle"></my-component>
    ```
    ```js
        app.component('my-component', {
            props: {
                title: String
            },
            emits: ['update:title'],
        })
    ```
* slot插槽
    * 默认插槽
    * 俱名插槽
    * 作用域插槽
        > 让插槽内容能够访问子组件中才有的数据，实现可订制化
* Provide / Inject: 深度嵌套组件通讯
    > 默认情况下，provide/inject 绑定并不是响应式的，可以通过传递一个 ref  或 reactive 对象给 provide 来改变这种行为
    
* 自定义事件
    * 抛出事件：通过 emits 选项在组件上定义发出的事件
    * 验证抛出的事件：与 prop 类型验证类似，要为验证的事件分配一个函数，该函数接收传递给 $emit 调用的参数，并返回一个布尔值以指示事件是否有效
    
    ```js
        app.component('custom-form', {
            // 无验证
            // emits:['click','submit'],
            emits: {
                // 无验证
                click: null,

                // 验证submit 事件
                submit: ({ email, password }) => {
                    if (email && password) {
                        return true
                    } else {
                        console.warn('Invalid submit event payload!')
                        return false
                    }
                }
            },
            methods: {
                submitForm(email, password) {
                    this.$emit('submit', { email, password })
                }
            }
        })
    ```
* 动态组件与异步组件
    * component & keep-alive
    * Vue.defineAsyncComponent()
        ```js
            const AsyncComp = defineAsyncComponent(
            () =>
                new Promise((resolve, reject) => {
                    resolve({
                        template: '<div>I am async!</div>'
                    })
                })
            )
        ```




### 组合式（Composition）API：
> Vue3新模式，解决选项式API（Options API）逻辑过于分散的问题，**将零散分布的逻辑组合在一起来维护**，并且还可以将单独的功能逻辑拆分成单独的文件

* 组合API入口：`setup(props,context)`
    > `setup()`为组件内使用 `Composition API`的入口，所有的组合api要在setup内部使用，它是在 beforeCreate 钩子之前调用的，执行 setup 时，组件实例尚未被创建
    * 参数
        * props
            > 该 props 对象将仅包含显性声明的 prop
        * context
            * attrs
            * slots
            * emit()
            * expose()
    * 返回值
        * Object: setup 返回的所有内容都暴露给组件的其余部分 (计算属性、方法、生命周期钩子等等) 以及组件的模板
            > 比data中的数据有更高的优先级
        * Function: 渲染函数
            ```js
                export default {
                    setup() {
                        const readersNumber = ref(0)
                        const book = reactive({ title: 'Vue 3 Guide' })
                        // 请注意这里我们需要显式使用 ref 的 value
                        return () => h('div', [readersNumber.value, book.title])
                    }
                }
            ```
* 生命周期钩子
    > 所有的钩子函数都为Vue下的方法
    * beforeCreate -> setup()
    * created -> setup()
    * beforeMount -> onBeforeMount
    * mounted -> onMounted
    * beforeUpdate -> onBeforeUpdate
    * updated -> onUpdated
    * beforeUnmount -> onBeforeUnmount
    * unmounted -> onUnmounted
    * errorCaptured -> onErrorCaptured
    * renderTracked -> onRenderTracked
    * renderTriggered -> onRenderTriggered
    * activated -> onActivated
    * deactivated -> onDeactivated
* 依赖注入：Provide / Inject
    > 如需获取祖先级组件的数据，可以使用`Vue.provide()`,`Vue.inject()`依赖注入组合实现
* 获取组件实例：`Vue.getCurrentInstance()`
    > 只能在 setup 或生命周期钩子中调用，强烈反对在应用的代码中使用 getCurrentInstance。请不要把它当作在组合式 API 中获取 this 的替代方案来使用

* 响应式 API
    * reactive()
        > 基于 ES2015 Proxy 的实现深层的响应式转换，对转换后的数据属性的修改都会被监听到

        * isReactive()
        * shallowReactive()
            >创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (暴露原始值)。
    * readonly()
        > 接受一个对象 (响应式或纯对象) 或 ref 并返回原始对象的只读代理。只读代理是深层的：任何被访问的嵌套 property 也是只读的。

        * isReadonly()
        * shallowReadonly()
            > 创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换 (暴露原始值)。
    * ref()
        > 返回 `{value}`格式的响应式且可变的 ref 对象，在js中需要**解包**使用（`xx.value`），在组件模板中ref对象会自动解包
        ```js
            const count = ref(1);
            // 获取
            count.value;// 11
            // 更新
            count.value++;
            // 在组件模板中使用
            {{count}}
        ```
        * toRef(target,key)     把target对象中的key属性转成ref对象
        * toRefs(target)        把target对象中所有属性转成ref对象
        * isRef()   判断是否为ref对象
        * shallowRef()  创建浅层ref对象
            > 如数据为一个对象，ref()会把对象中所有的属性也变成响应式，如不需要这个深层响应式，则使用shallowRef()

    * computed()
        * Function: 返回一个不可变的响应式 ref 对象。
        * Object: 接受一个具有 get 和 set 函数的对象，用来创建可写的 ref 对象
    * watch()
        > watch API 与选项式 API this.$watch (以及相应的 watch 选项) 完全等效
    * watchEffect()
        > 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数


### 新特性

#### Proxy
Proxy在目标对象之前架设一层“拦截器”，外界对该对象的读取、写入、遍历、删除等操作时，都必须先通过这层拦截器，可以对外界的操作进行过滤和改写

> 格式：
```js
    // target: 代理目标对象（可以是对象、数据等）
    // handle: 拦截器，支持13中类型拦截
    const p = new Proxy(target,handle)
```

#### 内置组件
* Teleport
    * to
* Suspense

### script setup
单文件组件 (SFC) 中使用组合式 API 的编译时语法糖，里面的代码会被编译成组件 `setup()` 函数的内容

* 顶层的绑定会被暴露给模板
    > 任何在 `<script setup>` 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用（包括组件），但响应式状态需要明确使用响应式 APIs 来创建
    ```html
    <script setup>
        import {ref} from 'vue'
        // 组件
        import MyComponent from './MyComponent.vue'

        // 变量（非响应式）
        const msg = 'Hello!'
        // 响应式属性
        const couter = ref(1)

        // 函数
        function log() {
            console.log(msg)
        }
    </script>

    <template>
        <div @click="log">{{ msg }}</div>
        <MyComponent></MyComponent>
    </template>
    ```
* 全局方法
    > 以下方法不需要导入，但只能在`<script setup>`中使用
    * defineProps
        > 等效于`props`
    * defineEmits
        > 等效于`emits`
    * defineExpose
        > `<script setup>`中声明的变量默认不会暴露到组件实例，如需暴露出去，需要`defineExpose()`显性导出，等效于`Vue.expose()`

        ```html
            <script setup>
                import { ref } from 'vue'
                const a = 1
                const b = ref(2)
                const c = reactive({})
                
                // 通过组件实例只能获取到a,b属性，获取不到c,ref属性
                defineExpose({
                    a,
                    b
                })
            </script>
        ```

### `<style>`特性
* scoped    组件局部样式
    > 给style添加scoped属性后，组件模板编译时会给组件中**所有的元素**和**子组件根元素**添加`data-v-[hash]`的属性，并把相应样式编译成属性选择器进行匹配
    * `:deep()` 深度伪类选择器
        ```css
            .a :deep(.b) {}
            /**
                以上代码被编译成
                .a[data-v-f3f3eg9] .b {
            */
        ```
    * `:slotted()` 插槽伪类选择器
        > 默认情况下，作用域样式不会影响到 `<slot/>` 渲染出来的内容
        ```css
            :slotted(div) {
                color: red;
            }
        ```
    * `:global` 全局伪类选择器
        ```css
            :global(.red) {
                color: red;
            }
        ```
* module
    > `<style module>` 标签会被编译为 CSS Modules 并且将生成的 CSS 类作为 $style 对象的键暴露给组件，实现了和 scope CSS 一样将 CSS 仅作用于当前组件的效果

    ```html
        <template>
            <p :class="$style.red">显示红色</p>
        </template>
        <style module>
            .red {
                color: red;
            }
        </style>

        <!-- 自定义注入名称 -->
        <template>
            <p :class="classes.red">显示绿色</p>
        </template>
        <style module="classes">
            .red {
                color: #58bc58;
            }
        </style>
    ```

    * 与组合式 API 一同使用
        > 通过 `useCssModule` API 在 `setup()` 和 `<script setup>`中使用
        ```js
            const styles = useCssModule()
        ```
    * `v-bind()`在css中使用js中的变量做为值
        ```html
            <script>
                export default {
                    data() {
                        return {
                            color: 'red'
                        }
                    }
                }
            </script>

            <style>
                .text {
                    color: v-bind(color);
                }
            </style>
        ```

## Vue-Router
> Vue3的应用，必须采用`vue-router@4`版本，官网：https://next.router.vuejs.org/zh/

* 安装
    ```js
        npm install vue-router@4
    ```
* 使用
    ```js
        import Vue from 'vue'
        import {createRouter,createWebHashHistory} from 'vue-router'
        const router = createRouter({
            history:createWebHashHistory()
            routes:[
                {
                    path:'/home',
                    component:Home
                }
            ]
        })

        const app = Vue.createApp()
        app.use(router)
        app.mount('#app')
    ```
* 渲染路由
    ```html
        <router-view></router-view>
    ```