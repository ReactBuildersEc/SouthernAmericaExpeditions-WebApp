import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import  RainbowButton  from './ConnectButton';
import  ETHPayment  from './MakePayment'
import { infuraProvider } from 'wagmi/providers/infura'
import{ Provider } from 'react-redux'
import store from '../Components/ReduxStore'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum,goerli],
  [
    infuraProvider({ apiKey:'https://goerli.infura.io/v3/682c39bac1294baeb74ae767786db1ca'})
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


 

export default function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <RainbowButton/>
          <ETHPayment/>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>

  )
}
