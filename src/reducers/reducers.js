import { GET_BARANGS, DELETE_BARANG, ADD_BARANG, UPDATE_BARANG, UPDATE_DETAIL, CALCULATE_TOTAL, TOGGLE_PREVIEW_MODAL } from '../actions/types'
import mataUangs from '../assets/data/mataUangs.json'

const initialState = {
  barangs: [
    {id:1, nama:'', jumlah:'', satuan:'', hargaSatuan:''},
  ],
  nomor: "",
  tanggal: "",
  jatuhTempo: "",
  diskon: "",
  pembayaran: "",
  namaUser: "",
  alamatUser: "",
  namaKlien: "",
  alamatKlien: "",
  subtotal: "",
  isOnPreview: false,
  logo: "",
  logoWidth: 128,
  logoHeight: 128,
  mataUangs: mataUangs,
  mataUang: 'Rp'
}

export default function( state = initialState, action ) {
  switch(action.type){
    case GET_BARANGS:
      return { 
        state
      }
    case DELETE_BARANG:
      return {
        ...state,
        barangs: state.barangs.filter(barang => barang.id !== action.payload)
      }
    case ADD_BARANG:
      return {
        ...state,
        barangs: [...state.barangs, action.payload]
      }
    case UPDATE_BARANG:
      return {
        ...state,
        barangs: state.barangs.map(barang => barang.id === action.payload.id ? action.payload : barang)
      }
    case UPDATE_DETAIL:
      return {
        ...state,
        ...action.payload,
      }
    case CALCULATE_TOTAL:
      return {
        ...state,
        subtotal: state.barangs.reduce(((a,x) => a+=x.jumlah*x.hargaSatuan),0),
        diskon: parseInt(state.diskon) || 0,
        total: state.subtotal - state.diskon
      }
    case TOGGLE_PREVIEW_MODAL:
      return {
        ...state,
        isOnPreview: !state.isOnPreview
      }
    default:
      return state
  }
}