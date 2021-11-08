// import styles from './index.css';
import ToDos from './ToDos/ToDos';
import Parse from 'parse';

export default function() {

  // init back4app URL and app ID and key
  Parse.initialize("iIhFiel5ckhwVudYiQPkpApiB2Sujt5K7A2fBdYo", "Rf2qDfjGlRymGSaeaq2Z35n292CQYGWMRCvtTOs4");
  Parse.serverURL = "https://parseapi.back4app.com/";

  return (
    <div style={{ marginTop: 20 }}>
    <ToDos />
    </div>
  );
}
