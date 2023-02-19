import { NUN_MAX_ALTERADO, NUN_MIN_ALTERADO} from './actionsType'

///Action Creator
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUN_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUN_MAX_ALTERADO,
        payload: novoNumero
    }
}