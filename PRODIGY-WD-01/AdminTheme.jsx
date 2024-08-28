// import { useState } from 'react'
// import '../assets/css/crud.css'
// import { Link } from 'react-router-dom'
// import bg from '../assets/images/bg.jpg'
// import AdminNavBar from '../components/AdminNavBar'
// import AdminSideBar from '../components/AdminSideBar'

// const AdminTheme = () => {
//   const initialThemes = [
//     { id: 1, name: 'Theme One', image: 'image1.jpg', description: 'Description for Theme One', price: '100' },
//     // Add more initial theme details as needed
//   ]

//   const backgroundImageStyle = {
//     backgroundImage: `url(${bg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   }

//   const [themes, setThemes] = useState(initialThemes)
//   const [displayTable, setDisplayTable] = useState(true)
//   const [formData, setFormData] = useState({ name: '', image: '', description: '', price: '' })
//   const [selectedThemeId, setSelectedThemeId] = useState(null)

//   const handleAddTheme = () => {
//     setDisplayTable(false)
//     setSelectedThemeId(null)
//   }

//   const handleUpdateTheme = (themeId) => {
//     setDisplayTable(false)
//     const selectedTheme = themes.find((theme) => theme.id === themeId)
//     setFormData({ ...selectedTheme })
//     setSelectedThemeId(themeId)
//   }

//   const handleDeleteTheme = (themeId) => {
//     const updatedThemes = themes.filter((theme) => theme.id !== themeId)
//     setThemes(updatedThemes)
//   }

//   const handleCancel = () => {
//     setDisplayTable(true)
//     setFormData({ name: '', image: '', description: '', price: '' })
//     setSelectedThemeId(null)
//   }

//   const handleFormSubmit = () => {
//     if (formData.name && formData.image && formData.description && formData.price) {
//       if (selectedThemeId) {
//         const updatedThemes = themes.map((theme) =>
//           theme.id === selectedThemeId ? { id: theme.id, ...formData } : theme
//         )
//         setThemes(updatedThemes)
//       } else {
//         setThemes([...themes, { id: themes.length + 1, ...formData }])
//       }
//       setFormData({ name: '', image: '', description: '', price: '' })
//       setDisplayTable(true)
//       setSelectedThemeId(null)
//     } else {
//       alert('Please fill in all fields')
//     }
//   }

//   const handleNameChange = (e) => {
//     setFormData({ ...formData, name: e.target.value })
//   }

//   const handleImageChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] })
//   }

//   const handleDescriptionChange = (e) => {
//     setFormData({ ...formData, description: e.target.value })
//   }

//   return (
//     <div>
//       <AdminNavBar />
//       <AdminSideBar />
//       <div className="bg" style={backgroundImageStyle}>
//         <div className="formm-container" style={{ textAlign: 'center' }}>
//           {displayTable ? (
//             <div>
//               <h1 className='user-tab-title'>Theme Details</h1>
//               <table className='user-tab'>
//                 <thead>
//                   <tr>
//                     <th className='user-tab-head'>Theme Name</th>
//                     <th className='user-tab-head'>Add Image</th>
//                     <th className='user-tab-head'>Description</th>
//                     <th className='user-tab-head'>Price</th>
//                     <th className='user-tab-head'>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {themes.map((theme) => (
//                     <tr key={theme.id}>
//                       <td className='user-tab-data'>{theme.name}</td>
//                       <td className='user-tab-data'><img src={theme.image} alt={theme.name} /></td>
//                       <td className='user-tab-data'>{theme.description}</td>
//                       <td className='user-tab-data'>{theme.price}</td>
//                       <td>
//                         <button className='buttt' onClick={() => handleUpdateTheme(theme.id)}>Update</button>
//                         &nbsp;&nbsp;
//                         <button className='buttt' onClick={() => handleDeleteTheme(theme.id)}>Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table> 
//               <button className='buttt' onClick={handleAddTheme}>Add Theme</button>
//               <br />
//               <button className='user-back'><Link to="/Adminlogin">Go Back</Link></button>
//             </div>
//           ) : (
//             <div>
//               <h1 className='user-tab-title'>{selectedThemeId ? 'Update Theme' : 'Add Theme'}</h1>
//               <div className='form11'>
//                 <form>
//                   <label className='label11'>
//                     Theme Name:
//                     <input className='input11' type="text" value={formData.name} onChange={handleNameChange} />
//                   </label><br />

//                   <label className='label11'>
//                     Add Image:
//                     <input className='input11' type="file" accept="image/*" onChange={handleImageChange} />
//                   </label><br />

//                   <label className='label11'>
//                     Description:
//                     <textarea className='input11' value={formData.description} onChange={handleDescriptionChange} />
//                   </label><br />

//                   <label className='label11'>
//                     Price:
//                     <input className='input11' type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
//                   </label><br />

//                   <button type="button" onClick={handleFormSubmit}>
//                     {selectedThemeId ? 'Update' : 'Add'}
//                   </button>
//                   &nbsp;&nbsp;&nbsp;&nbsp;
//                   <button type="button" onClick={handleCancel}>
//                     Cancel
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminTheme



import { useState } from "react";
import "../assets/css/Theme.css"
import AdminNavBar from '../components/AdminNavBar'
import bg from '../assets/images/bg.jpg'
import AdminSideBar from '../components/AdminSideBar'

function AdminService() {
    const [cards, setCards] = useState([
        { id: 1, image: "https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713371/logan-weaver-lgnwvr-lK0l9pzxLps-unsplash_gto54q.jpg", text: "Text for card 1" },
        { id: 2, image: "https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713366/brooke-lark-lcZ9NxhOSlo-unsplash_qd7mtl.jpg", text: "Text for card 2" },
        { id: 3, image: "https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713366/mockup-graphics-i1iqQRLULlg-unsplash_gaiptu.jpg", text: "Text for card 3" },
        { id: 4, image: "https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708359457/homecare/rgiayvb7tix281rexstd.jpg", text: "Text for card 4" }
    ]);

    const [editedText, setEditedText] = useState("");
    const [editedImage, setEditedImage] = useState("");
    const [editCardId, setEditCardId] = useState(null);

    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    };

    const handleEditText = (id, newText) => {
        setEditedText(newText);
    };

    const handleEditImage = (id, newImage) => {
        setEditedImage(newImage);
    };

    const handleSave = (id) => {
        setCards(cards.map((card) => {
            if (card.id === id) {
                return { ...card, text: editedText, image: editedImage };
            }
            return card;
        }));
        setEditCardId(null);
        setEditedText("");
        setEditedImage("");
    };

    const handleEdit = (id) => {
        setEditCardId(id);
        setEditedText(cards.find(card => card.id === id).text);
        setEditedImage(cards.find(card => card.id === id).image);
    };

    const backgroundImageStyle = {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%', 
      height: '100%',   
    }

    const handleAddCard = () => {
        const newCard = {
            id: Date.now(), 
            image: "",
            text: "New card text",
           
        };
        setCards([...cards, newCard]);
    };

    return (
        <>
           <AdminNavBar />
            <AdminSideBar />
            <div className="bg" style={backgroundImageStyle}>
                <div style={{ marginLeft: "10%", marginTop: "4%", display: "flex", flexWrap: "wrap", paddingTop:"100px"}}>
                    <div>
                        <button className="addbutton" onClick={handleAddCard} style={{ marginBottom: "20px" }}>Add Card</button>
                    </div>
                    {cards.map((card) => (
                        <div className="scard" key={card.id} style={{ width: "20%", margin: "10px", position: "relative" }}>
                            <img src={card.image || "https://via.placeholder.com/150"} alt={"Image " + card.id} style={{ width: "100%" }} />
                            {editCardId === card.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editedText}
                                        onChange={(e) => handleEditText(card.id, e.target.value)}
                                        style={{ marginTop: "10px", marginBottom: "10px", width: "80%", padding: "5px" }}
                                    />
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                handleEditImage(card.id, reader.result);
                                            };
                                            if (file) {
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                        style={{ marginBottom: "10px", marginLeft: "20px" }}
                                    />
                                    <button className="sbut" onClick={() => handleSave(card.id)}>Save</button>
                                </>
                            ) : (
                                <p style={{ marginTop: "10px" }}>{card.text}</p>
                            )}
                            <div className="card-buttons" style={{ position: "absolute", bottom: 0, width: "100%" }}>
                                <button className="sbutton" onClick={() => handleEdit(card.id)}>Edit</button>
                                <button className="sbutton" onClick={() => handleDelete(card.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
          </>
    );
}

export default AdminService;