import { useState, type FC } from "react"
import type { HomePageProduct } from "../../features/products/types/HomePageProduct"
import styles from "./Home.module.css"
import { useTranslation } from "react-i18next"

const Home: FC = () => {
  const { t } = useTranslation("translation")
  const [products, setProducts] = useState<HomePageProduct[]>([
    { id: "1", url: "", description: "" },
    { id: "2", url: "", description: "" },
    { id: "3", url: "", description: "" },
  ])
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        const url = URL.createObjectURL(file)
        const updatedProducts = [...products]
        updatedProducts[index].url = url
        setProducts(updatedProducts)

        const updatedFiles = [...files]
        updatedFiles[index] = file
        setFiles(updatedFiles)
      }
    }

  const handleInputChange =
    (index: number, field: keyof HomePageProduct) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const updatedProducts = [...products]
      updatedProducts[index][field] = event.target.value
      setProducts(updatedProducts)
    }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()

    products.forEach((product, index) => {
      formData.append(`products[${index}][id]`, product.id)
      formData.append(`products[${index}][description]`, product.description)
      if (files[index]) {
        formData.append(`products[${index}][file]`, files[index])
      }
    })
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        console.log("Data submitted successfully")
      } else {
        console.error("Error submitting data")
      }
    } catch (error) {
      console.error("Error submitting data", error)
    }
  }

  return (
    <div className={styles.homeContainer}>
    <div className="addCardContainer">
      <div className="container mx-auto p-9 relative">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-black shadow-md rounded-lg p-6 relative"
        >
          <div className={styles.firstContainer}>
          <div className="relative mb-4">
            <div className="flex flex-col md:flex-row md:items-start w-full">
              <div className="flex flex-col items-center md:w-1/3 relative">
                <div className="mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(0)}
                    id="file-upload-0"
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload-0"
                    className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                  >
                 {t("storeProduct.file")}
                  </label>
                  {products[0].url && (
                    <img
                      src={products[0].url}
                      alt="Product"
                      className="mt-2 max-w-xs absolute top-0 left-0 z-10"
                      style={{ width: "250px", height: "auto" }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col md:w-2/3 md:ml-4 relative">
                <textarea
                  value={products[0].description}
                  onChange={handleInputChange(0, "description")}
                  placeholder="Product Description"
                  className="mb-2 p-2 rounded border border-gray-300"
                />
              </div>
            </div>
          </div>
          </div>
  {/* 2 Product */}
          <div>
          <div className="relative mb-4 bg-white">
            <div className="flex flex-col md:flex-row-reverse md:items-start w-full">
              <div className="flex flex-col items-center md:w-1/3 relative">
                <div className="mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(1)}
                    id="file-upload-1"
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload-1"
                    className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                  >
                   {t("storeProduct.file")}
                  </label>
                  {products[1].url && (
                    <img
                      src={products[1].url}
                      alt="Product"
                      className="mt-2 max-w-xs absolute top-0 right-0 z-10"
                      style={{ width: "250px", height: "auto" }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col md:w-2/3 md:mr-4 relative">
                <textarea
                  value={products[1].description}
                  onChange={handleInputChange(1, "description")}
                  placeholder="Product Description"
                  className="mb-2 p-2 rounded border border-gray-300"
                />
              </div>
            </div>
          </div>
          </div>

          <div>
          {/* 3 Product */}
          <div className="relative mb-9">
            <div className="flex flex-col md:flex-row md:items-start w-full">
              <div className="flex flex-col items-center md:w-1/3 relative">
                <div className="mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange(2)}
                    id="file-upload-2"
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload-2"
                    className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                  >
                   {t("storeProduct.file")}
                  </label>
                  {products[2].url && (
                    <img
                      src={products[2].url}
                      alt="Product"
                      className="mt-2 max-w-xs absolute top-0 left-0 z-10"
                      style={{ width: "300px", height: "auto" }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col md:w-2/3 md:ml-4 relative">
                <textarea
                  value={products[2].description}
                  onChange={handleInputChange(2, "description")}
                  placeholder="Product Description"
                  className="mb-2 p-2 rounded border border-gray-300"
                />
              </div>
            </div>
          </div>
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Home;
