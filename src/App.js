import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './redux/Spin';
// форма отображения камментариев
//единичный  камментарий
function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
