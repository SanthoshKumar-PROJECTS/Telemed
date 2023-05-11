import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Rough = ({route}) => {

//     const{item} = route.params;

//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{color:'black'}}>{item.name}</Text>
//     </View>
//   )
// }

// export default Rough;

// const styles = StyleSheet.create({})

const Provider = ({navigation}) => {

    const [data,setData] = useState([
        {
            "id":1,
            "name":'Steve',
        },
        {
            "id":2,
            "name":'Smith',
        },
        {
            "id":3,
           "name":'Name',
        },
        {
            "id":4,
            "name":'Name',
        },
        {
            "id":5,
            "name":'Name',
        },
        {
            "id":6,
            "name":'Name',
        },
        {
            "id":7,
            "name":'Name',
        },
        {
            "id":8,
            "name":'Name',
        },
        {
            "id":9,
           "name":'Name',
        },
    ])

    const ToProceed = () => {
        navigation.navigate('Proceed')
    }

    const ToRough = (item) => {
        navigation.navigate('Rough',{item})
    }

    const handleOnpress = (item,index) => {
    
        const newItem = data.map((val)=>{
            if(val.id===item.id){  
                return{...val,selected:!val.selected}   
            }
            else{
                return val
            }
        })
        setData(newItem)
        console.log(item.name)
    }

    const [counter, setCounter] = useState(0);

    const ItemView = ({item,index}) => {

        return(
    
            <View style={styles.container}>
                    <TouchableOpacity onPress={() => {handleOnpress(item);ToRough(item)}}>
                        {item.selected ? (<Octicons style={{ color:'green', marginLeft: 5, marginTop: 5, position: 'absolute' }} name='check' size={20} />):null}
                        <View style={{ borderWidth: 0.5, borderColor: '#333333', marginTop: 100 }}></View>
                        <Text style={{ color:item.selected ?'green':'#333333', fontSize: 12, marginTop: 18, marginLeft: 5 ,fontFamily: 'SpaceGrotesk-Regular'}}>
                            {item.name}
                            </Text>
                    </TouchableOpacity>
                </View>
                
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <View style={{ height: 50,}}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 23, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular' }}>Add Provider</Text>
            </View>

            <FlatList
             data={data}
             keyExtractor={item => item.id}
             numColumns={3}
             renderItem={ItemView}
            />
          
            <View>
                <View style={{ borderWidth: 1, borderColor: '#333333' }}></View>
                <Text style={{ color: '#eaeaea', fontSize: 15, marginLeft: 15,top:20 ,fontFamily: 'SpaceGrotesk-Regular'}}>{counter} Provider(s) Selected</Text>
                <TouchableOpacity onPress={()=>ToProceed()} style={{ backgroundColor: 'green', width: 135, height: 45,top:-10,  borderRadius: 5, marginLeft: 210 }}>
                    <Text style={{ color: '#eaeaea', fontSize: 25, textAlign: 'center', marginTop: 4,fontFamily: 'SpaceGrotesk-Regular' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Provider;

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 160,
        backgroundColor: '#eaeaea',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 15,
        marginTop: 25,
    }
})