// const Heading = require("../models/headingSchema");


// module.exports = {
//   // Get the existing heading
//   getHeading: async (req, res) => {
//     try {
//       const heading = await Heading.findOne();
//       res.json(heading);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   // Update the existing heading or create a new one
//   updateHeading: async (req, res) => {
//     try {
//       const { name, tagline, roles, introduction, bannerImage } = req.body;

//       // Assuming you have only one document in the collection
//       const heading = await Heading.findOne();

//       if (!heading) {
//         // If no heading exists, create a new one
//         const newHeading = new Heading({
//           name,
//           tagline,
//           roles,
//           introduction,
//           bannerImage,
//         });
//         await newHeading.save();
//         res.json(newHeading);
//       } else {
//         // Update existing heading
//         heading.name = name;
//         heading.tagline = tagline;
//         heading.roles = roles;
//         heading.introduction = introduction;
//         heading.bannerImage = bannerImage;
//         await heading.save();
//         res.json(heading);
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },

//   // Add a new heading
//   addHeading: async (req, res) => {
//     try {
//       const { name, tagline, roles, introduction, bannerImage } = req.body;

//       // Create a new heading
//       const newHeading = new Heading({
//         name,
//         tagline,
//         roles,
//         introduction,
//         bannerImage,
//       });

//       // Save the new heading to the database
//       await newHeading.save();

//       res.json(newHeading);


//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   },
// };


const Heading = require("../models/headingSchema");

module.exports = {
  // Controller method to add a new heading
  addHeading: async (req, res) => {
    try {
      const { name, tagline, roles, introduction, bannerImage } = req.body;

      // Create a new heading instance
      const newHeading = new Heading({
        name,
        tagline,
        roles,
        introduction,
        bannerImage,
      });

      // Save the new heading to the database
      await newHeading.save();

      // Send the new heading as a JSON response
      res.json(newHeading);
    } catch (error) {
      // Handle errors and send an error response
      res.status(500).json({ error: error.message });
    }
  },

  // Controller method to retrieve the existing heading
  getHeading: async (req, res) => {
    try {
      // Find the heading in the database
      const heading = await Heading.findOne();

      // Send the heading as a JSON response
      res.json(heading);
    } catch (error) {
      // Handle errors and send an error response
      res.status(500).json({ error: error.message });
    }
  },

  // Controller method to update the existing heading or create a new one if it doesn't exist
  updateHeading: async (req, res) => {
    try {
      const { name, tagline, roles, introduction, bannerImage } = req.body;

      // Assuming you have only one document in the collection
      const heading = await Heading.findOne();

      if (!heading) {
        // If no heading exists, create a new one
        const newHeading = new Heading({
          name,
          tagline,
          roles,
          introduction,
          bannerImage,
        });
        await newHeading.save();
        // Send the newly created heading as a JSON response
        res.json(newHeading);
      } else {
        // Update the existing heading
        heading.name = name;
        heading.tagline = tagline;
        heading.roles = roles;
        heading.introduction = introduction;
        heading.bannerImage = bannerImage;
        await heading.save();
        // Send the updated heading as a JSON response
        res.json(heading);
      }
    } catch (error) {
      // Handle errors and send an error response
      res.status(500).json({ error: error.message });
    }
  }
};
