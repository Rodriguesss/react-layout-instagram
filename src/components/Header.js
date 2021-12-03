export default function Header() {
  return (
    <header>
      <nav>
        <div class="logo-container">
          <ion-icon name="logo-instagram" class="icon"></ion-icon>
          <img src="./assets/img/logo.png" alt="" class="logo-img" height="28" width="103" />
        </div>

        <div class="display-mobile-logo-img">
          <img src="./assets/img/logo.png" alt="" class="logo-img-mobile" height="28" width="103" />
        </div>

        <div class="search-container">
          <input type="text" placeholder="Pesquisar" class="search" />
        </div>

        <div class="nav-icons-container">
          <ion-icon name="paper-plane-outline" class="icon"></ion-icon>
          <div class="display-mobile-icons">
            <ion-icon name="compass-outline" class="icon"></ion-icon>
            <ion-icon name="heart-outline" class="icon"></ion-icon>
            <ion-icon name="person-outline" class="icon"></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  )
}