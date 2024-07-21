import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Earth from "./assets/images/earth.svg"
import Instagram from "./assets/images/instagram.svg"
import Telegram from "./assets/images/telegram.svg"
import Facebook from "./assets/images/facebook.svg"
import Github from "./assets/images/github.svg"

function App() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    residence: '',
    employees: '',
    description: '',
  });
  function getLS() {
    let infoLS = [];
    if (localStorage.getItem("infoLS")) {
      infoLS = JSON.parse(localStorage.getItem("infoLS"));
    }
    return infoLS;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let LS = getLS()
    LS.push(formData)
    localStorage.setItem("LS", JSON.stringify(LS));
  };

  
  return (
    <div className='wrapper'>
     <Header className="header"/>
     <div className="form-container">
      
      <h1>Kompaniya ma'lumotlari</h1>
      <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
      <form onSubmit={handleSubmit}>
        <div className="avatar-upload">
          <div className="avatar-preview">
            <div className="avatar">
              <img src="default-avatar.png" alt="Avatar" />
            </div>
          </div>
          <button type="button" className="upload-button">Yuklash</button>
        </div>

        <div className="form-group">
          <label>Kompaniya nomi <span>*</span></label>
          <input
            type="text"
            name="companyName"
            placeholder="Kompaniya nomi"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email <span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefon raqami <span>*</span></label>
          <select
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          >
            <option value="">UZ +9989</option>
            <option value="990976632829">998976632829</option>
            <option value="998900032829">998900032829</option>
            <option value="998999092829">998999092829</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Linklar <span>*</span></label>
          <div className="links">
            <button type="button" className="link-button"><img src={Earth} alt="" /></button>
            <button type="button" className="link-button"><img src={Instagram} alt="" /></button>
            <button type="button" className="link-button"><img src={Telegram} alt="" /></button>
            <button type="button" className="link-button"><img src={Facebook} alt="" /></button>
            <button type="button" className="link-button"><img src={Github} alt="" /></button>
          </div>
        </div>

        <div className="form-group">
          <label>Davlat <span>*</span></label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Davlat</option>
            <option value="O'zbekiston">O'zbekiston</option>
            <option value="Russia">Russia</option>
            <option value="America">America</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Shahar <span>*</span></label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Shahar</option>
            <option value="Toshkent">Toshkent</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Angren">Angren</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Yashash joyi <span>*</span></label>
          <input
            type="text"
            name="residence"
            placeholder="Joy"
            value={formData.residence}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Hodimlar soni <span>*</span></label>
          <input
            type="number"
            name="employees"
            placeholder="Hodimlar soni"
            value={formData.employees}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Izoh <span>*</span></label>
          <textarea
            name="description"
            placeholder="Kompaniya haqida izoh qoldiring"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="back-button">Orqaga</button>
          <button type="submit" className="next-button">Keyingisi</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default App
