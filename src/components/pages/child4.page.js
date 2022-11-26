import { useEffect } from "react";
import { connect } from "react-redux";

const Child4Page = ({ latest_score = '', random = '', posts = [] }) => {
  console.log("Child 4")
  useEffect(() => {
    console.log("Posts.....")
  }, [posts])

  return (<div className="page" style={{ marginTop: "10px", marginBottom: "10px" }}>
    <div>{latest_score ? `New Score : ${latest_score} ` : ''}</div>
    <div>New Random Number : {random}</div>

    <div>
      {posts.length > 0 && <div>  Child2 - Team - Parent - useEffec(team) - dispatch </div>}
      {posts.length > 0 &&
        posts.map(single => {
          return <div style={{ marginBottom: '5px', backgroundColor: '#fff' }} key={single.id}>
            {single.title}
          </div>
        })
      }
    </div>
  </div>);
}

const mapStateToPros = (state) => {
  return {
    latest_score: state.ParentReducer.score_update,
    posts: state.ParentReducer.posts
  }
}
export default connect(mapStateToPros, null)(Child4Page);