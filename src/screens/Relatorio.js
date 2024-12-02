import { View, Text, Image, StyleSheet } from 'react-native';

const Relatorio = () => {
    return (
        <View style={estilo.view}>
            <Image style={{ height: 250, width: 250, marginHorizontal: 20 }} source={{ uri: 'https://s3-alpha-sig.figma.com/img/c147/f710/adf593b6373a77052cd27c2c5c916cb3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3zm0Q~OlWxKsTlb~TcdvSi7rqyGo36stj~nmYac8SCLbTBZXB9t0z0oaqEeInFU6LujBZDdQjjhhXQ96HBRc-iCsP3N433s3m6UN3XkHbNiTG1nK2~T-1g-UHSOqGztlA4QB12G5Y2hlUAEjcgdDkzolJav-pRGplOr8YqEHqw6ASIUTlCJIBIoUeB4o766FN~50wXagiU-L63NY7AT0IR9DZjIjUuxh~3kgm3vzMuSvigRwm1QjsGozWTahttXLxukX6-NEBS1cJUjP2bZ9Bcxws0wW9tpQn6KWY5YthMxpxIUBeB4tqkCSZ~AJV3N6Tr8XlO3nPiI793juFmgjA__' }} />
            <Text style={estilo.legenda}>
                {"\n"}
                <View style={{ borderWidth: 1, backgroundColor: '#F1CE7E', width: 20, height: 20 }}></View>
                Execelente
                {"\n"}{"\n"}
                <View style={{ borderWidth: 1, backgroundColor: '#6994FE', width: 20, height: 20, }}></View>
                Bom
                {"\n"}{"\n"}
                <View style={{ borderWidth: 1, backgroundColor: '#5FCDA4', width: 20, height: 20, }}></View>
                Neutro
                {"\n"}{"\n"}
                <View style={{ borderWidth: 1, backgroundColor: '#EA7288', width: 20, height: 20, }}></View>
                Ruim
                {"\n"}{"\n"}
                <View style={{ borderWidth: 1, backgroundColor: '#53D8D8', width: 20, height: 20, }}></View>
                Pessimo
                {"\n"}
            </Text>
        </View>
    );
};

const estilo = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
        flexDirection: 'row',
    },
    legenda: {
        fontSize: 20,
        color: 'white',
    },
});

export default Relatorio;
