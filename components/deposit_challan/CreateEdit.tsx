
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { PaperSelect } from 'react-native-paper-select';

export const selectValidator = (value: any) => {
    if (!value || value.length <= 0) {
      return 'Please select a value.';
    }
  
    return '';
};


const OwnChallanCreateEdit = () => {

    const [text, setText] = React.useState("");
    const _goBack = () => console.log('Went back');

    const [gender, setGender] = useState<any>({
        value: '',
        list: [
          { _id: '1', value: 'Area 01' },
          { _id: '2', value: 'Area 02' },
          { _id: '3', value: 'Area 03' },
          { _id: '4', value: 'Area 04' },
          { _id: '5', value: 'Area 05' },
          { _id: '6', value: 'Area 06' },
          { _id: '7', value: 'Area 07' },
          { _id: '8', value: 'Area 08' },
          { _id: '9', value: 'Area 09' },
          { _id: '10', value: 'Area 10' },
        ],
        selectedList: [],
        error: '',
    });
    
    useEffect(() => {
        let isMounted = true;
        let _getData = async () => {
          if (isMounted) {
            setGender({
              ...gender,
              value: 'Area 01',
              selectedList: [{ _id: '1', value: 'Area 03' }],
            });
          }
        };
    
        _getData();
        return () => {
          isMounted = false;
        };
    }, []);

    const getMovies = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          setData(json.movies);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    


    return (
        <View>
            <Appbar.Header >
                <Appbar.BackAction onPress={_goBack} />
                <Appbar.Content title="ট্রিপ তৈরী করুন" style={[styles.app_header]} />
            </Appbar.Header>

            <View style={styles.container}> 

                <TextInput
                    mode="outlined"
                    label="ট্রিপ নম্বর"
                    value={text}
                    style={[styles.text_input]}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    mode="outlined"
                    label="ট্রিপের তারিখ"
                    value={text}
                    style={[styles.text_input]}
                    onChangeText={text => setText(text)}
                />

                <PaperSelect
                    label="লোড পয়েন্ট"
                    value={gender.value}
                    onSelection={(value: any) => {
                    setGender({
                        ...gender,
                        value: value.text,
                        selectedList: value.selectedList,
                        error: '',
                    });
                    }}
                    arrayList={[...gender.list]}
                    selectedArrayList={[...gender.selectedList]}
                    errorText={gender.error}
                    multiEnable={false}
                />

                <PaperSelect
                    label="আনলোড পয়েন্ট"
                    value={gender.value}
                    onSelection={(value: any) => {
                    setGender({
                        ...gender,
                        value: value.text,
                        selectedList: value.selectedList,
                        error: '',
                    });
                    }}
                    arrayList={[...gender.list]}
                    selectedArrayList={[...gender.selectedList]}
                    errorText={gender.error}
                    multiEnable={false}
                />

                <TextInput
                    mode="outlined"
                    label="মালের বিবরণ"
                    value={text}
                    style={[styles.text_input]}
                    placeholder="মালের বিবরণ"
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    mode="outlined"
                    label="নোট"
                    value={text}
                    style={[styles.text_input]}
                    placeholder="কোন কিছু নোট করে রাখতে চাইলে লিখতে পারেন"
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    mode="outlined"
                    label="গাড়ী নির্বাচন"
                    value={text}
                    style={[styles.text_input]}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    mode="outlined"
                    label="ড্রাইভার নির্বাচন"
                    value={text}
                    style={[styles.text_input]}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    mode="outlined"
                    label="হেলপার নির্বাচন"
                    value={text}
                    style={[styles.text_input]}
                    onChangeText={text => setText(text)}
                />

                <View>
                    <Button 
                        icon="camera"
                        mode="contained" 
                        buttonColor="#7ab317"
                        >সেভ করুন</Button>
                </View>
                
            </View>
        </View>
  )
}

export default OwnChallanCreateEdit

const styles = StyleSheet.create({

    app_header: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        marginHorizontal: 10,
        marginVertical: 10
    },

    text_input: {
        marginBottom: 20
    }



    // appbar_header:{
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     backgroundColor: '#F4D03F',
    //     padding: 10
    // },
    // card: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: 80,
    //     height: 80,
    //     borderRadius: 10,
    //     margin: 8
    // },
    // cardText: {
    //     fontSize: 20,
    //     fontWeight: 'bold',
    // },
    // colorRed: {
    //     backgroundColor: '#FE6868'
    // },
    // colorGreen: {
    //     backgroundColor: '#27AE60'
    // },
    // colorYellow: {
    //     backgroundColor: '#F4D03F'
    // },
    // colorBlue: {
    //     backgroundColor: '#3498DB'
    // },
    // colorBlack: {
    //     backgroundColor: '#2E4053'
    // },

  
})