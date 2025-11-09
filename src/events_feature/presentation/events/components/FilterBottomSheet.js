import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import Colors from '../../../../../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const FilterBottomSheet = ({sheetRef, onSheetClose}) => {
    const insets = useSafeAreaInsets()
  return (
    <BottomSheetModal handleComponent={null} ref={sheetRef} snapPoints={["96%"]}>
        <BottomSheetView style={{height:'100%', width:'100%', justifyContent:'space-between', paddingBottom:insets.bottom}}>
            {/* SheetHeader */}
            <View style={{width:'100%', height:60, flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:18}}>

                <TouchableOpacity onPress={onSheetClose}>
                    <Text style={{fontSize:18, fontWeight:'600', color:Colors.primary}}>Cancel</Text>
                </TouchableOpacity>

                <Text style={{fontSize:18, fontWeight:'600'}}>Filters</Text>

                <TouchableOpacity onPress={onSheetClose}>
                    <Text style={{fontSize:18, fontWeight:'600', color:Colors.primary}}>Reset</Text>
                </TouchableOpacity>

            </View>



            {/* SheetBottom */}
            <View style={{height:50, width:'100%', paddingHorizontal:18}}>
                <TouchableOpacity onPress={onSheetClose} style={{height:'100%', width:'100%', backgroundColor:Colors.primary, justifyContent:'center', alignItems:'center', borderRadius:12}}>
                    <Text style={{color:'white', fontSize:18, fontWeight:'500'}}>Apply</Text>
                </TouchableOpacity>
            </View>
        </BottomSheetView>
    </BottomSheetModal>
  )
}

export default FilterBottomSheet