import GangManagement from './layers/gangManagement/GangManagement';
import Dev from './layers/dev/Dev';
import { isEnvBrowser } from './utils/misc';
import { loadTurfs } from './state';

function App() {

  loadTurfs();

  return (
    <>
      <GangManagement />
      {isEnvBrowser() && <Dev />}
    </>
  );
}

export default App;
