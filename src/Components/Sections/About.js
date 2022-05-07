import BigDialogWindow from '../Dialog/BigDialogWindow/DialogWindow';

const About = (props) => {
  return (
    <div className={`${props.bodyStyle}`}>
      <BigDialogWindow title="About me">
        <p>
          My name is Vladislav Goteiner, I'm a starting full stack web developer. 
          It's about time that I created my first website. This is my play ground for web proggraming and designing.
          Here I will post my projects and show off my skills.
        </p> 
        <p>I graduated from H.I.T with a degree in applied mathematics.</p>
      </BigDialogWindow>
    </div>
  );
};

export default About;
