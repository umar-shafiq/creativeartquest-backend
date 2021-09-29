const models = require("../../models/index");
const abi = require("../../data/sample-data.json");
require('dotenv').config()
// const Web3 = require("web3");

// var web3 = new Web3(process.env.INFURA_URL);

module.exports = {
  nft: async (req, res, next) => {
    try {
     

      
        const entries = await abi.forEach(async(item,index)=>{
            let newNft = await models.NFT.create({
            drop_name: item.drop_name,
            description: item.description,
            collection_name: item.collection_name,
            pixels: item.pixels,
            particle_angle: item.particle_angle,
            fps: item.fps,
            particles: item.particles,
            frames: item.frames,
            image: item.image,
            thumbnail: item.thumbnail,
           

            })
        }) 
       

      return res.json({
        data: "Cards Added",
        error: null,
        success: true,
      });
    } catch (error) {
      console.log("server error", error.message);
      next(error);
    }
  },
  get_meta_data:async(req,res,next)=>{

    try {
  
      const {id} = req.params;


      // const ct = new web3.eth.Contract(abi, process.env.CONTRACT);
      // const token = await ct.methods.tokenURI(index).call();
      // console.log('token', token)

      // if (!nft.isMinted) {
      //   throw new Error("Token not minted");
      // }


      const nft = await models.NFT.findOne({
        where:{
          id:id
        }
      })

      if (!nft) {
        throw new Error("Token ID invalid");
      }
      console.log(nft);
   
     
      const resObj = {
        name: nft.drop_name,
        image: nft.image || "",
        description: nft.description || "",
        attributes: [
          {
            trait_type: "Collection Name",
            value: nft.collection_name,
          },

          {
            trait_type: "Pixels",
            value: nft.pixels,
          },

          {
            trait_type: "Particle Angle",
            value: nft.particle_angle,
          },

          {
            trait_type: "FPS",
            value: nft.fps,
          },

          {
            trait_type: "Particles",
            value: nft.particles,
          },

          {
            trait_type: "Frames",
            value: nft.frames,
          },
          {
            trait_type: "Thumbnail",
            value: nft.thumbnail,
          },
          
          
          
        ],
      };
    
      return res.json(
        resObj
      );
    
    } catch (error) {
        console.log("server error", error.message);
        next(error)
    
    }
  },




};
