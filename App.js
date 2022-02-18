import React, { useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView,
  TouchableOpacity, TextInput,
} from 'react-native';


const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: 'white',
    height: '100%'
  },
  // Main heading //
  todoDiv: {
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    justifyContent: 'space-between',
    padding: 20
  },
  heading: {
    color: 'blue',
    fontSize: 32
  },
  deleteIcon: {
    color: 'blue',
    fontSize: 22
  }
  ,
  // List items //
  list: {
    height: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#CCCCFF',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listHeading: {
    color: 'blue',
    fontSize: 20,
    width: 200,
  },
  btnText: {
    color: 'blue',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'

  },
  // input //
  inputDiv: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopColor: 'blue',
    borderTopWidth: 2
  },
  input: {
    height: 50,
    width: 250,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: 'white',
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    color: 'blue'
  },

  inputbtn: {
    height: 50,
    width: 50,
    backgroundColor: '#CCCCFF',
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputbtntext: {
    color: 'blue',
    fontWeight: 'bold'
  }
})

function App() {
  const [todoList, setTodoList] = useState(['Soha', 'Shabana', 'Urooj'])
  const [todo, setTodo] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [indexVal, setindexVal] = useState()


  const handleAddTodo = () => {
    if (isEdit) {
      todoList[indexVal] = todo
      setTodoList([...todoList])
      setIsEdit(false)
      setTodo('')
    }
    else {
      setTodoList([...todoList, todo])
      setTodo('')
    }
  }

  const handleDeleteAll = () => {
    setTodoList([])
  }
  const handleDeleteTodo = (i) => {
    todoList[i]
    todoList.splice(i, 1)
    console.log(todoList[i]);
    setTodoList([...todoList])

  }

  const handleEdit = (i) => {
    setTodo(todoList[i])
    setIsEdit(true)
    setindexVal(i)
  }
  return <>

    <SafeAreaView style={styles.mainDiv}>
      {/* Main heading  */}
      <View style={styles.todoDiv}>
        <View>
          <Text style={styles.heading}>
            Todo App
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleDeleteAll}
        >
          <Text style={styles.deleteIcon}>
            🗑︎
          </Text>
        </TouchableOpacity>
      </View>
      {/* List Item  */}
      <View style={styles.list}>
        {
          todoList.map((e, i) => {
            return <View key={i} style={styles.listItem}>
             
              {/* list  */}
              <View>
                <Text style={styles.listHeading}>
                  {e}
                </Text>
              </View>
              {/* delete  */}
              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => handleDeleteTodo(i)}>
                  <Text style={styles.btnText}>
                    🗑︎
                  </Text>
                </TouchableOpacity>
              </View>
              {/* update  */}
              <View style={styles.btn}
              >
                <TouchableOpacity
                  onPress={() => handleEdit(i)}
                >
                  <Text style={styles.btnText} style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                    ✏️
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          })
        }
      </View>
      {/* Todo Input  */}
      <View style={styles.inputDiv}>
        <View>
          <TextInput value={String(todo)}
            onChangeText={(e) => setTodo(e)}
            style={styles.input} placeholder='Enter Todo ...' />
        </View>
        <View>
          <TouchableOpacity style={styles.inputbtn}
            onPress={handleAddTodo}>
            <Text style={styles.inputbtntext}>
              ➕
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </>
}

export default App;