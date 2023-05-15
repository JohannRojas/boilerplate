import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface DemitoState {
  name: string
  age: number
}

const initialState: DemitoState = {
  name: 'demito',
  age: 18,
}

export const demitoSlice = createSlice({
  name: 'demito',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string> ) {
      state.name = action.payload
    },

    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.demito,
    //     }
    //   }
    // }
  }
})

export const { setName } = demitoSlice.actions
export default demitoSlice.reducer