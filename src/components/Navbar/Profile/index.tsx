import s from "./styles.module.scss";

function Profile() {
  const image = false;
  return (
    <div className={`${s.ProfileWrapper} d-flex-acjc`}>
      <div className={`${s.ProfileImage} d-flex-acjc`}>
        {image && (
          <img
            src="https://olhardigital.com.br/wp-content/uploads/2021/05/Dwayne-The-Rock.png"
            alt="Avatar do usuário"
          />
        )}
      </div>
    </div>
  );
}

export default Profile;
