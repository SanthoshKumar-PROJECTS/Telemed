import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'

const Data = [
    {
        id:1,
        name:'Name',
        selected:false
    },
    {
        id:2,
        name:'Name',
        selected:false
    },
    {
        id:3,
        name:'Name',
        selected:false
    },
    {
        id:4,
        name:'Name',
        selected:false
    },
    {
        id:5,
        name:'Name',
        selected:false
    },
    {
        id:6,
        name:'Name',
        selected:false
    },
    {
        id:7,
        name:'Name',
        selected:false
    },
    {
        id:8,
        name:'Name',
        selected:false
    },
    {
        id:9,
        name:'Name',
        selected:false
    },
]

const Provider = ({navigation}) => {

    const ToProceed = () => {
        navigation.navigate('Proceed')
    }

    const [select, setSelect] = useState(Data)
    const [counter, setCounter] = useState(0)
    const [showInfo, SetShowInfo] = useState(false);

    const handleOnpress = (item) => {
        const newItem = select.map((val)=>{
            if(val.id===item.id){
                return{...val,selected:!val.selected}
            }
            else{
                return val;
            }
        })
        setSelect(newItem)
    }


    const ItemView = ({item}) => {

        return(
    
            <View style={styles.container}>
                    <TouchableOpacity onPress={() => {handleOnpress(item)}}>
                        {item.selected ? (<Octicons style={{ color:'green', marginLeft: 5, marginTop: 5, position: 'absolute' }} name='check' size={20} />):null}
                        <View style={{ borderWidth: 0.5, borderColor: '#333333', marginTop: 100 }}></View>
                        <Text style={{ color:item.selected ?'green':'#333333', fontSize: 12, marginTop: 18, marginLeft: 5 ,fontFamily: 'SpaceGrotesk-Regular'}}>{item.name}</Text>
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
             data={select}
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