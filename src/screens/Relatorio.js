import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PieChart from 'react-native-pie-chart';

const Relatorio = () => {
    const pessimo = useSelector((state) => state.pesquisa.pessimo);
    const ruim = useSelector((state) => state.pesquisa.ruim);
    const neutro = useSelector((state) => state.pesquisa.neutro);
    const bom = useSelector((state) => state.pesquisa.bom);
    const excelente = useSelector((state) => state.pesquisa.excelente);
    const total = pessimo + ruim + neutro + bom + excelente;
    const series = [pessimo, ruim, neutro, bom, excelente];
    const sliceColor = ["red", "orange", "yellow", "lime", "green"];

    const itemPesquisa = (nomeVariavel, valor) => {
        const porcentagem = total > 0 ? ((valor / total) * 100).toFixed(2) : 0;

        return (
            <Text style={estilo.legenda}>
                {nomeVariavel}: {porcentagem}%
            </Text>
        );
    };

    return (
        total === 0 ? (
            <View style={estilo.container}>
                <Text style={estilo.headerText}>
                    Nenhum dado cadastrado
                </Text>
            </View>
        ) : (
            <View style={estilo.view}>
                <View style={estilo.pieContainer}>
                    <PieChart
                        widthAndHeight={150}
                        series={series}
                        sliceColor={sliceColor}
                    />
                </View>
                <View style={estilo.textoContainer}>
                    <View style={estilo.legendaItem}>
                        <View style={estilo.colorBox('red')} />
                        {itemPesquisa("Péssimo", pessimo)}
                    </View>
                    <View style={estilo.legendaItem}>
                        <View style={estilo.colorBox('orange')} />
                        {itemPesquisa("Ruim", ruim)}
                    </View>
                    <View style={estilo.legendaItem}>
                        <View style={estilo.colorBox('yellow')} />
                        {itemPesquisa("Neutro", neutro)}
                    </View>
                    <View style={estilo.legendaItem}>
                        <View style={estilo.colorBox('lime')} />
                        {itemPesquisa("Bom", bom)}
                    </View>
                    <View style={estilo.legendaItem}>
                        <View style={estilo.colorBox('green')} />
                        {itemPesquisa("Excelente", excelente)}
                    </View>
                </View>
            </View>
        )
    );
};

const estilo = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#372775',
    },
    pieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    textoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    legendaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    colorBox: (color) => ({
        borderWidth: 1,
        backgroundColor: color,
        width: 20,
        height: 20,
        marginRight: 8,
    }),
    legenda: {
        fontSize: 20,
        color: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        width: '90%',
        backgroundColor: '#372775',
        textAlign: 'center',
        fontSize: 48,
        lineHeight: 57,
        fontFamily: 'Averia Libre',
        color: '#FFFFFF',
    },
});

export default Relatorio;