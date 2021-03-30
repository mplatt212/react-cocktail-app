import React, {useState} from 'react'
import List from './List'
import Alert from './Alert'

const App = () => {
  const [list,setList] = useState([])
  const [itemName,setItemName] = useState('')
  const [alert,setAlert] = useState({show:false,type:'',msg:''})
  const [editMode,setEditMode] = useState(false)
  const [editID,setEditID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!itemName) {
      return null;
    }
    else if(itemName && editMode) {
      const newList = list.map((item) => {
        if(item.id == editID){
          return {...item,title: itemName}
        }
        return item
      })
      setList(newList)
      setItemName('')
      setEditID(null)
      setEditMode(false)
      showAlert(true,'success','Edit successful.')
    }
    else {
      const newItem = {id: new Date().getTime().toString(), title: itemName}
      setList([...list,newItem])
      setItemName('')
      showAlert(true,'success','Item added.')
    }
    
  }

  const showAlert = (show=false,type='',msg='') => {
    setAlert({show,type,msg})
  }

  const removeItem = (id) => {
      const newList = list.filter((item) => 
        item.id !== id
      )
      setList(newList)
      showAlert(true,'danger','Item removed.')
  }

  const clearAll = () => {
    setList([])
    showAlert(true,'danger','All items removed.')
  }

  const editItem = (id) => {
    setEditMode(!editMode)
    const specificItem = list.find((item) => 
      id == item.id
    )
    setItemName(specificItem.title)
    setEditID(id)
  }

  return <>
    <main>
      <header>
        <h2 className="title">Grocery Cart</h2>
        {alert.show && <Alert alert={alert} list={list} removeAlert={showAlert} />}
      </header>
      <section>
        <form action="" className="form-inline">
          <input 
            type="text"
            placeholder='Eggs...'
            className='form-control'
            value={itemName}
            onChange={(e)=>{setItemName(e.target.value)}}
          />
          <button 
            type='submit'  
            className="btn btn-primary btn-submit"
            onClick={handleSubmit}
            >{editMode ? 'Edit' : 'Submit'}
          </button>
        </form>
        <List list={list} removeItem={removeItem} editItem={editItem} />
      </section>
      {list.length > 0 && <button className="btn btn-danger clear-all" onClick={()=>clearAll()}>Clear All</button>}
    </main>

  </>
}

export default App