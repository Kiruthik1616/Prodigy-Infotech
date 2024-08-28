import { useState } from 'react'
import '../assets/css/crud.css'
import { Link } from 'react-router-dom'
import bg from '../assets/images/bg.jpg'
import AdminNavBar from '../components/AdminNavBar'
import AdminSideBar from '../components/AdminSideBar'

const AdminAddOns = () => {
  const initialThemes = [
    { id: 1, name: 'AddOn One', image: 'image1.jpg', description: 'Description for AddOn', price: '1000' },
  ]

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const [themes, setThemes] = useState(initialThemes)
  const [displayTable, setDisplayTable] = useState(true)
  const [formData, setFormData] = useState({ name: '', image: '', description: '', price: '' })
  const [selectedThemeId, setSelectedThemeId] = useState(null)

  const handleAddTheme = () => {
    setDisplayTable(false)
    setSelectedThemeId(null)
  }

  const handleUpdateTheme = (themeId) => {
    setDisplayTable(false)
    const selectedTheme = themes.find((theme) => theme.id === themeId)
    setFormData({ ...selectedTheme })
    setSelectedThemeId(themeId)
  }

  const handleDeleteTheme = (themeId) => {
    const updatedThemes = themes.filter((theme) => theme.id !== themeId)
    setThemes(updatedThemes)
  }

  const handleCancel = () => {
    setDisplayTable(true)
    setFormData({ name: '', image: '', description: '', price: '' })
    setSelectedThemeId(null)
  }

  const handleFormSubmit = () => {
    if (formData.name && formData.image && formData.description && formData.price) {
      if (selectedThemeId) {
        const updatedThemes = themes.map((theme) =>
          theme.id === selectedThemeId ? { id: theme.id, ...formData } : theme
        )
        setThemes(updatedThemes)
      } else {
        setThemes([...themes, { id: themes.length + 1, ...formData }])
      }
      setFormData({ name: '', image: '', description: '', price: '' })
      setDisplayTable(true)
      setSelectedThemeId(null)
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value })
  }

  return (
    <div>
      <AdminNavBar />
      <AdminSideBar />
      <div className="bg" style={backgroundImageStyle}>
        <div className="formm-container" style={{ textAlign: 'center' }}>
          {displayTable ? (
            <div>
              <h1 className='user-tab-title'>AddOns</h1>
              <table className='user-tab'>
                <thead>
                  <tr>
                    <th className='user-tab-head'>AddOns</th>
                    <th className='user-tab-head'> Image</th>
                    <th className='user-tab-head'>Description</th>
                    <th className='user-tab-head'>Price</th>
                    <th className='user-tab-head'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {themes.map((theme) => (
                    <tr key={theme.id}>
                      <td className='user-tab-data'>{theme.name}</td>
                      <td className='user-tab-data'><img src={theme.image} alt={theme.name} /></td>
                      <td className='user-tab-data'>{theme.description}</td>
                      <td className='user-tab-data'>{theme.price}</td>
                      <td>
                        <button className='buttt' onClick={() => handleUpdateTheme(theme.id)}>Update</button>
                        &nbsp;&nbsp;
                        <button className='buttt' onClick={() => handleDeleteTheme(theme.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> 
              <button className='buttt' onClick={handleAddTheme}>Add</button>
              <br />
              <button className='user-back'><Link to="/Adminlogin">Go Back</Link></button>
            </div>
          ) : (
            <div>
              <h1 className='user-tab-title'>{selectedThemeId ? 'Update Theme' : 'AddOns'}</h1>
              <div className='form11'>
                <form>
                  <label className='label11'>
                    AddOns:
                    <input className='input11' type="text" value={formData.name} onChange={handleNameChange} />
                  </label><br />

                  <label className='label11'>
                    Add Image:
                    <input className='input11' type="file" accept="image/*" onChange={handleImageChange} />
                  </label><br />

                  <label className='label11'>
                    Description:
                    <textarea className='input11' value={formData.description} onChange={handleDescriptionChange} />
                  </label><br />

                  <label className='label11'>
                    Price:
                    <input className='input11' type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                  </label><br />

                  <button type="button" onClick={handleFormSubmit}>
                    {selectedThemeId ? 'Update' : 'Add'}
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminAddOns