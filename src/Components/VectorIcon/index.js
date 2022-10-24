import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MarterialIcons from 'react-native-vector-icons/MaterialIcons';
import MarterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {typeIcon} from '../../until/constand';

const VectorIcon = ({type, name, size = 30, color}) => {
  switch (type) {
    case typeIcon.AntDesign:
      return <AntDesign name={name} size={size} color={color} />;
    case typeIcon.FontAwesome:
      return <FontAwesome name={name} size={size} color={color} />;
    case typeIcon.FontAwesome5:
      return <FontAwesome5 name={name} size={size} color={color} />;
    case typeIcon.Feather:
      return <Feather name={name} size={size} color={color} />;
    case typeIcon.Ionicons:
      return <Ionicon name={name} size={size} color={color} />;
    case typeIcon.MarterialIcons:
      return <MarterialIcons name={name} size={size} color={color} />;
    case typeIcon.MarterialcomunityIcons:
      return <MarterialComunityIcons name={name} size={size} color={color} />;
    case typeIcon.EvilIcons:
      return <EvilIcons name={name} size={size} color={color} />;
    default:
      break;
  }
};

export default VectorIcon;
