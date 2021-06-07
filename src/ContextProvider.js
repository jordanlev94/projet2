import React, {useState, useEffect} from 'react'

export const Context = React.createContext()


const ContextProvider = (props) => {
    const {children} = props

    const [uid, setUid] = useState('')
    const [cart, setCart] = useState([])
    const [islog, setIslog] = useState(false)
    const [name, setName] = useState('')
    const [contextProduct, setContextProduct] = useState('')
    

    useEffect(() => {
        const uid = localStorage.getItem('uid')
        if (uid) {
          setUid(uid)
        }
    }, [])

    const context = {
        uid,
        setUid,
        cart,
        setCart,
        islog,
        setIslog,
        name,
        setName,
        contextProduct,
        setContextProduct,
    }

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider