
function UserProfile(props){
    return (
        <div style={{ border: '3px solid gray', padding: '10px', margin: '10px' , backgroundColor:"hsla(0, 0%, 79%, 1.00)" }}>
            <h2 style={{ color: '#080000ff' , fontSize:"30px" }}>{props.name}</h2>
            <p style={{ fontWeight: 'bolder' , color: '#080000ff'  }}>Age: <span style={{ fontWeight: 'bold' , color: '#550000ff'  }}>{props.age}</span></p>
            <p style={{ fontWeight: 'bolder' , color: '#080000ff'  }}>Bio: <span style={{ fontWeight: 'bold' , color: '#550000ff'  }}>{props.bio}</span></p>
        </div>
    );

}
export default UserProfile;