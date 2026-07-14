"use strict";

/**
 * Creates numbered artwork entries.
 *
 * Example:
 * createNumberedArtworks(
 *   "Digital Painting",
 *   "assets/digital/DigitalPainting",
 *   20
 * )
 */
function createNumberedArtworks(
  titlePrefix,
  pathPrefix,
  total,
  extension = "jpg"
) {
  return Array.from({ length: total }, (_, index) => {
    const number = index + 1;

    return {
      id: number,
      title: `${titlePrefix} ${number}`,
      image: `${pathPrefix}${number}.${extension}`,
      description: `Artwork from Kent's ${titlePrefix.toLowerCase()} collection.`
    };
  });
}

window.portfolioCollections = [
  {
    id: "digital",
    title: "Digital Painting",
    shortTitle: "Digital",
    description:
      "Expressive digital paintings and character-based visual works.",
    artworks: createNumberedArtworks(
      "Digital Painting",
      "assets/digital/DigitalPainting",
      20
    )
  },

  {
    id: "traditional",
    title: "Traditional Artwork",
    shortTitle: "Traditional",
    description:
      "Hand-created artwork featuring drawing, ink, colour and traditional techniques.",
    artworks: createNumberedArtworks(
      "Traditional Artwork",
      "assets/traditional/TraditionalArtwork",
      11
    )
  },

  {
    id: "portrait",
    title: "Portrait Drawing",
    shortTitle: "Portraits",
    description:
      "Portrait studies exploring expression, personality and visual character.",
    artworks: createNumberedArtworks(
      "Portrait Drawing",
      "assets/portrait/PortraitDrawing",
      4
    )
  },

  {
    id: "illustration",
    title: "Illustration",
    shortTitle: "Illustration",
    description:
      "Illustrative projects combining storytelling, character and composition.",
    artworks: createNumberedArtworks(
      "Illustration",
      "assets/Illustration/Illustration",
      2
    )
  },

  {
    id: "mascot",
    title: "Mascot Design",
    shortTitle: "Mascots",
    description:
      "Friendly and expressive mascot characters created for communication and branding.",
    artworks: createNumberedArtworks(
      "Mascot Design",
      "assets/mascot/Mascot",
      4
    )
  },

  {
    id: "logo",
    title: "Logo Design",
    shortTitle: "Logos",
    description:
      "Selected identity marks created for brands, communities and commercial projects.",
    artworks: [
      {
        id: 1,
        title: "Ah Maung Logo",
        image: "assets/logo/AH_MAUNG_Logo.jpg",
        description:
          "Logo identity created for Ah Maung Online Store."
      },
      {
        id: 2,
        title: "Wolf of Rangoon Logo",
        image: "assets/logo/WOR_Logo.jpg",
        description:
          "Logo identity created for Wolf of Rangoon."
      }
    ]
  },

  {
    id: "social",
    title: "Social Media Design",
    shortTitle: "Social",
    description:
      "Campaign posts, promotional graphics and digital communication materials.",
    artworks: [
      {
        id: 1,
        title: "Ah Maung Post 1",
        image: "assets/social/AhMaungPost1_SocialMedia.jpg"
      },
      {
        id: 2,
        title: "Ah Maung Post 2",
        image: "assets/social/AhMaungPost2_SocialMedia.jpg"
      },
      {
        id: 3,
        title: "Ah Maung Post 3",
        image: "assets/social/AhMaungPost3_SocialMedia.jpg"
      },
      {
        id: 4,
        title: "Ah Maung Post 4",
        image: "assets/social/AhMaungPost4_SocialMedia.jpg"
      },
      {
        id: 5,
        title: "HOPE Social Post 1",
        image: "assets/social/HOPEPost_SocialMedia.jpg"
      },
      {
        id: 6,
        title: "HOPE Social Post 2",
        image: "assets/social/HOPEPost2_SocialMedia.jpg"
      },
      {
        id: 7,
        title: "HOPE Social Post 3",
        image: "assets/social/HOPEPost3_SocialMedia.jpg"
      },
      {
        id: 8,
        title: "HOPE Social Post 4",
        image: "assets/social/HOPEPost4_SocialMedia.jpg"
      },
      {
        id: 9,
        title: "HOPE Social Post 5",
        image: "assets/social/HOPEPost5_SocialMedia.jpg"
      },
      {
        id: 10,
        title: "HOPE Social Post 6",
        image: "assets/social/HOPEPost6_SocialMedia.jpg"
      },
      {
        id: 11,
        title: "HOPE Social Post 7",
        image: "assets/social/HOPEPost7_SocialMedia.jpg"
      },
      {
        id: 12,
        title: "HOPE Social Post 8",
        image: "assets/social/HOPEPost8_SocialMedia.jpg"
      },
      {
        id: 13,
        title: "Study in Italy",
        image: "assets/social/StudyInItaly_SocialMedia.jpg"
      },
      {
        id: 14,
        title: "TFW Cover",
        image: "assets/social/TFW Cover_SocialMedia.png"
      },
      {
        id: 15,
        title: "TFW Enrollment 1",
        image: "assets/social/TFW Enrollment 1.1_SocialMedia.png"
      },
      {
        id: 16,
        title: "TFW Enrollment 2",
        image: "assets/social/TFW Enrollment 2_SocialMedia.png"
      },
      {
        id: 17,
        title: "TFW Enrollment 3",
        image: "assets/social/TFW Enrollment 3_SocialMedia.png"
      },
      {
        id: 18,
        title: "TFW Enrollment 4",
        image: "assets/social/TFW Enrollment 4_SocialMedia.png"
      },
      {
        id: 19,
        title: "TFW Free Trial Reminder",
        image: "assets/social/TFW Free Trial Reminder_SocialMedia.jpg"
      },
      {
        id: 20,
        title: "TFW Introduction",
        image: "assets/social/TFW Intro_SocialMedia.jpg"
      },
      {
        id: 21,
        title: "TFW Reminder",
        image: "assets/social/TFW Reminder_SocialMedia.png"
      },
      {
        id: 22,
        title: "TFW Scholarship",
        image: "assets/social/TFW Scholarship_SocialMedia.png"
      },
      {
        id: 23,
        title: "TFW Teacher Introduction",
        image: "assets/social/TFW Tr Intro 1 copy_SocialMedia.png"
      },
      {
        id: 24,
        title: "TFW Trial Class",
        image: "assets/social/TFW Trial Class._SocialMedia.png"
      },
      {
        id: 25,
        title: "TFW Payment Information",
        image: "assets/social/TFW payment_SocialMedia.png"
      }
    ]
  },

  {
    id: "others",
    title: "Other Projects",
    shortTitle: "Projects",
    description:
      "Character design, campaign work, product design and creative public projects.",
    artworks: [
      {
        id: 1,
        title: "Animal Character Design 1",
        image: "assets/others/AnimalCharacterDesign1.jpg"
      },
      {
        id: 2,
        title: "Animal Character Design 2",
        image: "assets/others/AnimalCharacterDesign2.jpg"
      },
      {
        id: 3,
        title: "Animal Character Design 3",
        image: "assets/others/AnimalCharacterDesign3.jpg"
      },
      {
        id: 4,
        title: "Animal Character Design 4",
        image: "assets/others/AnimalCharacterDesign4.jpg"
      },
      {
        id: 5,
        title: "Campaign Poster",
        image: "assets/others/CampaignPoster.jpg"
      },
      {
        id: 6,
        title: "T-Shirt Design",
        image: "assets/others/TeeDesign.jpg"
      },
      {
        id: 7,
        title: "Tote Bag Design",
        image: "assets/others/ToteBagDesign.jpg"
      },
      {
        id: 8,
        title: "Wall Graffiti Project",
        image: "assets/others/WallGraffiti.jpg"
      }
    ]
  }
];

/**
 * Add default descriptions where an individual description
 * has not yet been written.
 */
window.portfolioCollections.forEach((collection) => {
  collection.artworks.forEach((artwork) => {
    if (!artwork.description) {
      artwork.description =
        `Selected work from Kent's ${collection.title.toLowerCase()} collection.`;
    }
  });
});