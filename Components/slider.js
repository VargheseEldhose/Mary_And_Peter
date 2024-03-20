import { SliderBox } from "react-native-image-slider-box";
import {SafeAreaView, View} from 'react-native'
// Define your image array source
const images = [
  require("./Images/image1.jpg"),
  require("./Images/image2.jpg"),
  require("./Images/image3.jpg"),
  require("./Images/image4.jpg"),
  require("./Images/image5.jpg"),
  // Add more image paths here
];

// In your component render:


 function Slider (){

    return(
        <SafeAreaView style={{backgroundColor:'white'}}> 
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