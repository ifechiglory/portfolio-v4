// download-images.js
const fs = require("fs")
const path = require("path")
const https = require("https")

const projects = [
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1761664408/Screenshot_2025-10-28_161457_d7j7av.png",
    filename: "project-1.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1761664123/Screenshot_2025-10-28_160940_c2uapm.png",
    filename: "project-2.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1762392213/Screenshot_2025-11-06_022427_uqiz0x.png",
    filename: "project-3.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1761664197/Screenshot_2025-10-08_132748_bwq4ba.png",
    filename: "project-4.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1761664020/Screenshot_2025-10-28_160815_mdhz0q.png",
    filename: "project-5.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1762393692/Screenshot_2025-11-06_023057_yffpaf.png",
    filename: "project-6.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1762419294/Screenshot_2025-11-06_022500_ekbbbp.png",
    filename: "project-7.jpg",
  },
  {
    url: "https://res.cloudinary.com/dbrbymxln/image/upload/v1763209053/Screenshot_2025-11-15_131834_chjsn1.png",
    filename: "project-8.jpg",
  },
]

const imagesDir = path.join(__dirname, "src", "images", "projects")

// Create directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// Download function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename)
    const file = fs.createWriteStream(filepath)

    https
      .get(url, response => {
        response.pipe(file)
        file.on("finish", () => {
          file.close()
          console.log(`✅ Downloaded: ${filename}`)
          resolve()
        })
      })
      .on("error", err => {
        fs.unlink(filepath, () => {}) // Delete file on error
        console.error(`❌ Error downloading ${filename}:`, err.message)
        reject(err)
      })
  })
}

// Download all images
async function downloadAll() {
  console.log("📥 Downloading project images...")

  for (let i = 0; i < projects.length; i++) {
    try {
      await downloadImage(projects[i].url, projects[i].filename)
    } catch (err) {
      console.error(`Failed to download ${projects[i].filename}`)
    }
  }

  console.log("🎉 All images downloaded to src/images/projects/")
}

downloadAll()
