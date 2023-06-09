import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonItem, IonPage, IonTitle, IonCheckbox, IonIcon, IonList, IonText } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Home.css';

const Home: React.FC = () => {

  const history = useHistory()

  const [name, setName] = useState('');
  const handleChange = (e:any) => {
    e.preventDefault();
    console.log(name);
  }
 const onClick=()=>{
  localStorage.setItem("myObject", JSON.stringify(name));
  history.push('/page1',{
    name
 })
}
  return (
    <IonPage>
      <IonContent className='ion-contact-info'>
        <IonItem className='inputbox-submit' color="dark" fill='outline' >
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            className='ion-in-box'
            type="text"
            name="name"
            value={name}
            onIonChange={(e)=>setName(e.target.value as unknown as string)}
            required={true}
            placeholder="Enter your Name..."
          ></IonInput>
        </IonItem>
        <p className='ion-text-center'>
          <IonButton className="ion-btn-color" onClick={onClick}>Submit</IonButton>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;