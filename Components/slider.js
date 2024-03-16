import { SliderBox } from "react-native-image-slider-box";
import {SafeAreaView, View} from 'react-native'
// Define your image array source
const images = [
  require("./Images/1.jpg"),
  require("./Images/image2.jpg"),
  // Add more image paths here
];

// In your component render:


 function Slider (){

    return(
        <SafeAreaView>
         <SliderBox
  images={images}
  autoplay
  circleLoop
  sliderBoxHeight={500}
  dotColor="#E91E63"
  
  // Other customization props...
/>
        </SafeAreaView>
    )



 }
 export default Slider