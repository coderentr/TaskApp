import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import {Provider} from "react-redux"//Tüm iç içe bileşenlerin Stora'erişebilmesi için kullanıyoruz.
import TaskListCompenent from "./src/compenents/TaskList"
import {store} from './src/redux'//storemızı import ediyoruz. 
const App=()=>{
  return (
    <Provider store={store}>
    <SafeAreaView>
        <ScrollView>
          <TaskListCompenent></TaskListCompenent>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  )
}
export default App;