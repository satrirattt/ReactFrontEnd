import Hello from './assets/Hello';
import Contact from './assets/Contact';
import Counter from './assets/Counter';

function App() {
  const helloData = [
    { name: 'Satrirat', message: 'Hi there'},
    { name: 'Tom', message: 'Hello..'}
  ];

  return (
    <div className ='App'>
      <Counter />
      {helloData.map((data, index)=> (
        <Hello key = {index} name = {data.name} message= {data.message} />
      ))}
      
      <Contact email = "s6606021620198@email.kmutnb.ac.th" phone = "095817----" />
    </div>
  );
}

export default App;
