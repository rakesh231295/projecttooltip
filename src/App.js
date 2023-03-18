import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    <>
    <h2 className='mt'>Simple Tooltip project</h2>
    <div className="box">
      
      {/* left tooltip */}
      <div style={{paddingBottom:'20px'}}>
        <Tippy placement='left' content={<span style={{color:'#fff'}}>I am left tooltip</span>}>
        <button>Hover left</button>
        </Tippy>
      </div>

      {/* right tooltip */}
      <div style={{paddingBottom:'20px'}}>
        <Tippy placement='right' content={<span style={{color:'#fff'}}>I am right tooltip</span>}>
        <button>Hover right</button>
        </Tippy>
      </div>
      
      {/* bottom tooltip */}
      <div style={{paddingBottom:'20px'}}>
        <Tippy placement='bottom' content={<span style={{color:'#fff'}}>I am bottom tooltip</span>}>
        <button>Hover bottom</button>
        </Tippy>
      </div>
      
      {/* top tooltp */}
      <div style={{paddingBottom:'20px'}}>
        <Tippy placement='top' content={<span style={{color:'#fff'}}>I am top tooltip</span>}>
        <button>Hover top</button>
        </Tippy>
      </div>
    </div>
    </>
  );
}

export default App;
