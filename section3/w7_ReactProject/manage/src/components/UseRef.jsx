import React,{useState,useEffect,useMemo,useCallback,useRef} from 'react'

const myset1 = new Set()
const myset2 = new Set()

function UseRef(props){
    console.log('start')
    let [qty,setQty] = useState(1)
    const [count,setCount] = useState(10)

    // useRef()只在初始化时创建ref对象，更新时得到缓存值
    const refObj1 = useRef(100);
    refObj1.current = 200;
    // createRef()每次都会创建一个新的ref对象
    const refObj2 = React.createRef(); // 返回一个带current属性的对象
    // refObj.current = 100;

    myset1.add(refObj1)
    myset2.add(refObj2)

    // console.log('myset1',myset1)
    // console.log('myset2',myset2)
    

    // useEffect(()=>{
    //     refObj2.current.className="title"
    // })

    // 倒计时
    const [time,setTime] = useState(5);
    const refRun = useRef()
    refRun.current = useCallback(()=>{
        console.log('timer')
        setTime(time-1)
    },[time])
    const refTimer = useRef()
    useEffect(()=>{
        refTimer.current = setInterval(()=>{
            refRun.current()
        },1000)
        return function(){
            // 组件销毁时清除定时器
            clearInterval(refTimer.current)
        }
    },[])
    useEffect(()=>{
        if(time<=0){
            // 倒计时结束时清楚定时器
            clearInterval(refTimer.current)
        }
    },[time])

    
    const changeQty = useCallback(function(){
        setQty((prev)=>{
            return prev+1
        })
    },[]);
    const changeCount = useCallback(()=>{
        setCount(count+1)
    },[count])

    
    console.log('end')
    return (
        <div>
            <h4 ref={refObj2}>useRef</h4>
            <p>倒计时：{time}</p>
            <button onClick={changeQty}>qty:{qty}</button>
            <button onClick={changeCount}>count:{count}</button>
        </div>
    )
}

export default UseRef;