import Profile from './Profile';
import Suggestions from './Suggetions';

export default function LateralAssets() {
  return (
    <div class="lateral-asets">
      <div class="lateral-asets-fixed">
        <Profile />
        <Suggestions />
        <div class="about">
          <p>• <span>Ajuda</span> • <span>Imprensa</span> • <span>API</span> • <span>Carreiras</span> •
            <span>Privacidade</span> •
            <span>Termos</span> • <span>Localizações</span> • <span>Contas mais relevantes</span> •
            <span>Hashtags</span> •
            <span>Idioma</span>
          </p>

          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
      </div>
    </div>
  )
}
