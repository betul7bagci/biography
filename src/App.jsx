
function App() {
  
  const styles = {
    h1Style: { backgroundColor: "pink", fontSize: "40px", color: "darkGrey" },
    h2Style: { backgroundColor: "grey", fontSize: "30px", color: "darkGrey" },
    h3Style: { backgroundColor: "lavender", fontSize: "30px", color: "darkGrey" },
    h4Style: { backgroundColor: "lightblue", fontSize: "30px", color: "darkGrey" },
    h5Style: { fontFamily:"Times-new-roman", fontSize:"20px", fontWeight: "bold"}
  };
  const schoolnames= ["Dilek Özer İ.Ö.O", "Ahmet Rüştü Anadolu Lisesi", "Bandırma Onyedi Eylül Üniversitesi"];
  const mapschsoolnames = schoolnames.map((user, i) => <li key={i}>{user}</li>);

  const hobbies= ["Temel Dikiş Atölyesi", "Filografi", "Su Kabağı İşlemeciliği"];
  const mapHobbies = hobbies.map((user, i) => <li key={i}>{user}</li>);


  return (
    <>
      <h1 style={styles.h1Style}>Bi-Biyografi</h1>

      <h2 style={styles.h2Style}>Ben Kimim?</h2>
      <p>Adım Betül Bağcı. 30 Nisan 1996 tarihinde Bursa'da dünyaya geldim.
        Şu an 27 yaşındayım. Annemin Adı Günay, babamın adı Mesut.
        3 kız kardeşiz, en büyükleri benim. Kardeşlerimin isimleri Begüm ve Almina Beril.
        Onların da yaşları sırasıyla 25 ve 14.
        </p>
        <p>
İlk, Orta ve Lise öğrenimimi Bursa'da tamamladım. Lisans eğitimim için 3.5 sene Bandırma'da yaşadım.
Bandırma Onyedi Eylül Üniversitesi'nde Siyaset Bilimi ve Kamu Yönetimi okudum.
Okulumun son döneminde derslerimi öncesinde verdiğim için evdeydim. Corona Virüs ile de tam bu dönemlerde tanıştık.
Dolayısıyla mezun olduktan sonra sağlık sebepleri ve ekonomi gibi nedenlerle bir süre işsiz kaldım.
sonrasında 2022'nin Şubat'ında Mali Müşavirlik ofisinde çalışmaya başladım.
2. senem daha dolmadan SMMM Staj başlatma sınavını kazandım.
Şu anda aynı ofiste Stajyer Mali Müşavir olarak çalışmaya devam ediyorum.
        </p>
        <p>
          Çok yönlü bir insanım, pek çok hobim ve merakım var. Şu an Üretken Akademi ve Bursa Büyükşehir Belediyesi işbirliğiyle açılan
           Code16 Temel Yazılım Atölyesinde 5. haftamı geçiriyorum. Yazılım öğrenmek oldukça zevkli. Bu alanda Kendimi geliştirmeyi planlıyorum.
           Bunun yanında dikiş dikmeyi seviyorum. Vakit buldukça el sanatlarıyla ilgili kurslara katılmayı tercih ediyorum.
           Üretmekten, ortaya çıkan sonuçları izlemekten büyük keyif alıyorum.

            
        </p>

<hr/>
        <h3 style={styles.h3Style}>Okuduğum Okullar</h3>

        <ul>
        {schoolnames.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <hr/>
        
      <img src="https://dilekozerortaokulu.meb.k12.tr/meb_iys_dosyalar/16/14/716611/resimler/2023_04/27133850_28005342_Dilek_Ozer_Ortaokulu.jpg" width="400" height="300" alt="Dilek Özer İlköğretim Okulu" />
      <h5 style={styles.h5Style}>Dilek Özer İlköğretim Okulu</h5>
      <hr/>
      <img src="https://maral.meb.k12.tr/meb_iys_dosyalar/16/09/135624/resimler/2020_02/k_26114808_unnamed_1.jpg" width="400" height="300" alt="Ahmet Rüştü Anadolu Lisesi" />
      <h5 style={styles.h5Style}>Ahmet Rüştü Anadolu Lisesi</h5>
      <hr/>
      <img src="https://studyin.bandirma.edu.tr/Content/WEB/Yuklemeler/Slider/119/16402961-d6eb-11e9-10a8-966d5026ae33.jpg" width="400" height="300" alt="Bandırma Onyedi Eylül Üniversitesi" />
      <h5 style={styles.h5Style}>Bandırma Onyedi Eylül Üniversitesi</h5>
      <hr/>

      <h4 style={styles.h4Style}>Katıldığım Hobi kursları</h4>
      <ul>
        {hobbies.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>



    </>
  )
}

export default App
