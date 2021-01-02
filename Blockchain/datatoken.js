/* import { DataTokens } from '@oceanprotocol/lib/dist/datatokens'
import { Ocean } from '@oceanprotocol/lib/dist/ocean' */
/* const {  } = require('../ContractHandler') */
const { DataTokens, Ocean } = require('@oceanprotocol/lib')
const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:8545')
const factory = require('@oceanprotocol/contracts/artifacts/DTFactory.json')
const datatokensTemplate = require('@oceanprotocol/contracts/artifacts/DataTokenTemplate.json')

const config = {
    metadataCacheUri: 'http://aquarius:5000',
    providerUri: 'http://localhost:8030',
    nodeUri: `http://localhost:${process.env.ETH_PORT || 8545}`,
    verbose: 1,
    web3Provider: web3,
    factoryAddress: '0xe8299cce89f1b30e1d65ebb827b784d8900aef2c'
  }
  async function init() {
    const ocean = await Ocean.getInstance(config)
    //console.log(ocean)
    const alice = (await ocean.accounts.list())[0]
  
    //console.log(alice)

    datatoken = new DataTokens(
      config.factoryAddress,
      factory.abi,
      datatokensTemplate.abi,
      web3
    )

    const data = { t: 1, url: ocean.config.metadataCacheUri }
    const blob = JSON.stringify(data)
    const dataTokenAddress = await datatoken.create(blob, alice.getId())
    console.log(dataTokenAddress)

    const asset = {
      main: {
        type: 'dataset',
        name: 'test-dataset',
        dateCreated: new Date(Date.now()).toISOString().split('.')[0] + 'Z', // remove milliseconds
        author: 'oceanprotocol-team',
        license: 'MIT',
        files: [
          {
            url:
              'https://raw.githubusercontent.com/tbertinmahieux/MSongsDB/master/Tasks_Demos/CoverSongs/shs_dataset_test.txt',
            checksum: 'efb2c764274b745f5fc37f97c6b0e761',
            contentLength: '4535431',
            contentType: 'text/csv',
            encoding: 'UTF-8',
            compression: 'zip'
          }
        ]
      }
    }

    service1 = await ocean.assets.createAccessServiceAttributes(
      alice,
      10, // set the price in datatoken
      new Date(Date.now()).toISOString().split('.')[0] + 'Z', // publishedDate
      0 // timeout
    )
    
    ocean.web3Provider = web3
    // publish asset
    console.log(ocean.OnChainMetadataCache.DDOContractAddress)
    //console.log(ocean)
    
    const ddo = await ocean.assets.create(asset, alice, [`https://github.com/oceanprotocol/ocean.js/blob/main/docs/quickstart_marketplace.md`], dataTokenAddress)
    //console.log(ddo)
    //const did = ddo.id
  }
  init()
  
