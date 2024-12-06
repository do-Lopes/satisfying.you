import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
    nome: null,
    data: null,
    imagem: null,
    pessimo: 0,
    ruim: 0,
    neutro: 0,
    bom: 0,
    excelente: 0,
}

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: initialValues,
    reducers: {
        reducerPesquisa: (state, action) => {
            state.nome = action.payload.nome;
            state.data = action.payload.data;
            state.imagem = action.payload.imagem;
            state.pessimo = action.payload.pessimo;
            state.ruim = action.payload.ruim;
            state.neutro = action.payload.neutro;
            state.bom = action.payload.bom;
            state.excelente = action.payload.excelente;
        }
    }
})

export const { reducerPesquisa } = pesquisaSlice.actions;

export default pesquisaSlice.reducer;
