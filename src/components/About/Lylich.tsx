
interface datalylich{
    data1 : String[]
}

const Lylich = (props: datalylich) => {
    const showlylich = (data: String[])=> {
        const lylichitem =  data.map((item,key)=>{
            
              return (
                  <p key={key}>{item}</p>
              )
          })
          return lylichitem;
  
  
      }

    return (
        <div className="lylich">
            <h3>Lý Lịch Chuyên Nghiệp</h3>
            {showlylich(props.data1)}

        </div>
    )

}

export default Lylich
