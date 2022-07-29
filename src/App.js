import './App.css';
import HeadlineMain from './HeadlineMain';
import SummaryMain from "./SummaryMain";

function App() {

  const headlineData = [
    {
      id: 1,
      thumbnail: "https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg",
      title: "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings",
      text: "The Centre for Public Integrity has urged Victorian MPs to implement sweeping integrity reforms before November’s state election following a damning investigation into branch stacking and the misuse of taxpayer funds.",
    },
    {
      id: 2,
      thumbnail: "https://media.guim.co.uk/27c027752091e28dcb8133b0d5e6cb9af7fd4e8e/60_0_1800_1080/500.jpg",
      title: "PMQs live: Boris Johnson faces Keir Starmer for last time as Tory MPs set to choose final two leadership candidates",
      text: "Boris Johnson is taking PMQs at 12pm. With the Commons starting its summer recess tomorrow, and the winner of the Tory leadership election due to be announced when parliament returns on Monday 5 September, this will be Johnson’s last time doing these exchanges.",
    },
    {
      id: 3,
      thumbnail: "https://media.guim.co.uk/247ef32c1194f34fdfd8dd4b0c52039eafae5caf/0_0_3862_2318/500.jpg",
      title: "Sunak accused of ‘economic illiteracy’ over pledge to block onshore windfarms",
      text: "Opposition parties have accused Rishi Sunak of “economic illiteracy” and a lack of seriousness over the climate emergency after he announced a plan for the UK to become energy independent while at the same time making it harder to use onshore wind.",
    },
  ]; 

  return (
    <div className="App">
      <header className="App-header">
        <HeadlineMain headlines={headlineData} />
        <SummaryMain headlines={headlineData} />
      </header>
    </div>
  );
}

export default App;
