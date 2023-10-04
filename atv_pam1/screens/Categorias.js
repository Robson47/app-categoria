import { Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, TextInput, View } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Categorias() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBox}>
                <Image style={styles.img} source={require('../assets/img.png')} />
            </View>
            {/* TÍTULO DE CATEGORIAS */}
            <View style={styles.titleBox}>
                <Text style={styles.title}>Cadastro de Categorias</Text>
            </View>
            {/* TEXT INPUT DE NOME DE CATEGORIA */}
            <View style={styles.containerTextInput}>
                <Materialicons name='book-plus' size={20} color={'white'}/>
                <TextInput style={styles.textInput} placeholderTextColor={'white'} placeholder='Categoria' keyboardType='web-search' />
            </View>

            {/* TEXT INPUT DE OBSERVAÇÃO DE CATEGORIA */}
            <View style={styles.containerTextInput}>
                <Materialicons name='book-plus-multiple' size={20} color={'white'}/>
                <TextInput style={styles.textInput} multiline={true} placeholderTextColor={'white'} placeholder='Observação'/>
            </View>

            {/* BOTÃO DE CADASTRO */}
            <TouchableOpacity style={styles.btnCadastro}>
                <Text style={styles.txtCadastro}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#014a45',
        padding: 0
    },
    topBox: {
        alignItems: 'center',
    },
    img: {
        width: 490,
        height: 400,
    },
    titleBox: {
        backgroundColor: '#2fc262',
        height: 60,
        marginBottom: 20
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '500',
        color: '#ffffff',
    },
    containerTextInput: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 25,
        alignItems: 'center',
    },
    textInput:{
        padding: 12,
        color: 'white',
        fontSize: 16
    },
    btnCadastro: {
        marginTop: 10,
        backgroundColor: '#2fc262',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    txtCadastro: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
});