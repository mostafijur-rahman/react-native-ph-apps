import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Button, Card, Text, Divider, Modal, Portal, PaperProvider } from 'react-native-paper';


const List = () => {

    const _goBack = () => console.log('Went back');

    // for modal
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
        <View>
            <Appbar.Header >
                <Appbar.Action icon="menu" onPress={_goBack} />
                <Appbar.Content title="ট্রিপের তালিকা" style={[styles.app_header]} />
                <Appbar.Action icon="magnify" onPress={showModal} />
            </Appbar.Header>

            <ScrollView>

                <View style={styles.container}> 
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">চালান নম্বর : 006</Text>
                            <Text variant="bodyLarge">তারিখ : 15/08/2023</Text>
                            <Text variant="bodyLarge">গাড়ী : DHK-5496</Text>
                            <Text variant="bodyLarge">ক্লায়েন্ট : বসুন্ধরা গ্রুপ</Text>
                            <Text variant="bodyLarge">চুক্তি ভাড়া = 15,000</Text>
                            <Text variant="bodyLarge">মোট জমা = 5,000 (<Text variant="bodyLarge" style={{ color: '#D0312D' }}>বাকি = 10,000</Text>)</Text>
                            <Text variant="bodyLarge">মোট খরচ = (-) 2000</Text> 
                            <Divider style={{ paddingTop: 2, marginTop: 5 }} />
                            <Text variant="bodyLarge">ব্যালেন্স = 3,000</Text>
                        </Card.Content>
                        <Button 
                            style={styles.card_bottom_btn} 
                            mode="contained-tonal" 
                            onPress={() => console.log('Pressed')}>
                            বিস্তারিত
                        </Button>
                    </Card>

                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">চালান নম্বর : 006</Text>
                            <Text variant="bodyLarge">তারিখ : 15/08/2023</Text>
                            <Text variant="bodyLarge">গাড়ী : DHK-5496</Text>
                            <Text variant="bodyLarge">ক্লায়েন্ট : বসুন্ধরা গ্রুপ</Text>
                            <Text variant="bodyLarge">চুক্তি ভাড়া = 15,000</Text>
                            <Text variant="bodyLarge">মোট জমা = 5,000 (<Text variant="bodyLarge" style={{ color: '#D0312D' }}>বাকি = 10,000</Text>)</Text>
                            <Text variant="bodyLarge">মোট খরচ = (-) 2000</Text>
                            <Divider style={{ paddingTop: 2, marginTop: 5 }} />
                            <Text variant="bodyLarge">ব্যালেন্স = 3,000</Text>
                        </Card.Content>
                        <Button 
                            style={styles.card_bottom_btn} 
                            mode="contained-tonal" 
                            onPress={() => console.log('Pressed')}>
                            বিস্তারিত
                        </Button>
                    </Card>

                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">চালান নম্বর : 006</Text>
                            <Text variant="bodyLarge">তারিখ : 15/08/2023</Text>
                            <Text variant="bodyLarge">গাড়ী : DHK-5496</Text>
                            <Text variant="bodyLarge">ক্লায়েন্ট : বসুন্ধরা গ্রুপ</Text>
                            <Text variant="bodyLarge">চুক্তি ভাড়া = 15,000</Text>
                            <Text variant="bodyLarge">মোট জমা = 5,000 (<Text variant="bodyLarge" style={{ color: '#D0312D' }}>বাকি = 10,000</Text>)</Text>
                            <Text variant="bodyLarge">মোট খরচ = (-) 2000</Text>
                            <Divider style={{ paddingTop: 2, marginTop: 5 }} />
                            <Text variant="bodyLarge">ব্যালেন্স = 3,000</Text>
                        </Card.Content>
                        <Button 
                            style={styles.card_bottom_btn} 
                            mode="contained-tonal" 
                            onPress={() => console.log('Pressed')}>
                            বিস্তারিত
                        </Button>
                    </Card>

                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">চালান নম্বর : 006</Text>
                            <Text variant="bodyLarge">তারিখ : 15/08/2023</Text>
                            <Text variant="bodyLarge">গাড়ী : DHK-5496</Text>
                            <Text variant="bodyLarge">ক্লায়েন্ট : বসুন্ধরা গ্রুপ</Text>
                            <Text variant="bodyLarge">চুক্তি ভাড়া = 15,000</Text>
                            <Text variant="bodyLarge">মোট জমা = 5,000 (<Text variant="bodyLarge" style={{ color: '#D0312D' }}>বাকি = 10,000</Text>)</Text>
                            <Text variant="bodyLarge">মোট খরচ = (-) 2000</Text>
                            <Divider style={{ paddingTop: 2, marginTop: 5 }} />
                            <Text variant="bodyLarge">ব্যালেন্স = 3,000</Text>
                        </Card.Content>
                        <Button 
                            style={styles.card_bottom_btn} 
                            mode="contained-tonal" 
                            onPress={() => console.log('Pressed')}>
                            বিস্তারিত
                        </Button>
                    </Card>

                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">চালান নম্বর : 006</Text>
                            <Text variant="bodyLarge">তারিখ : 15/08/2023</Text>
                            <Text variant="bodyLarge">গাড়ী : DHK-5496</Text>
                            <Text variant="bodyLarge">ক্লায়েন্ট : বসুন্ধরা গ্রুপ</Text>
                            <Text variant="bodyLarge">চুক্তি ভাড়া = 15,000</Text>
                            <Text variant="bodyLarge">মোট জমা = 5,000 (<Text variant="bodyLarge" style={{ color: '#D0312D' }}>বাকি = 10,000</Text>)</Text>
                            <Text variant="bodyLarge">মোট খরচ = (-) 2000</Text>
                            <Divider style={{ paddingTop: 2, marginTop: 5 }} />
                            <Text variant="bodyLarge">ব্যালেন্স = 3,000</Text>
                        </Card.Content>
                        <Button style={styles.card_bottom_btn} mode="contained-tonal" onPress={() => console.log('Pressed')}>
                            বিস্তারিত
                        </Button>
                    </Card>

                </View>
            </ScrollView>

            <PaperProvider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
            </PaperProvider>

        </View>
  )
}

export default List

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
    },
    card: {
        marginBottom: 10
    },
    card_bottom_btn: {
        width: 100,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 5
    }
})