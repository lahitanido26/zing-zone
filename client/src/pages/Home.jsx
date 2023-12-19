/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css/bundle'
import ListingItem from '../components/ListingItem'
import Carosel from '../components/Carosel'
import { Box } from '@chakra-ui/react'

export default function Home() {
  const [offerListings, setOfferListings] = useState([])
  const [saleListings, setSaleListings] = useState([])
  const [rentListings, setRentListings] = useState([])
  SwiperCore.use([Navigation])

  useEffect(() => {
    const fetchData = async (endpoint, stateSetter) => {
      try {
        const res = await fetch(`/api/listing/get${endpoint}`)
        const data = await res.json()
        stateSetter(data)
      } catch (error) {
        console.error(error)
      }
    }

    const fetchAllListings = async () => {
      fetchData('?offer=true&limit=6', setOfferListings)
      fetchData('?type=rent&limit=6', setRentListings)
      fetchData('?type=sale&limit=6', setSaleListings)
    }

    fetchAllListings()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      {/* <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="font-bold text-3xl lg:text-5xl text-white">
          Discover Your Dream Home with{' '}
          <span className="text-black">Zing-Zone</span>
        </h1>
        <div className="text-black text-sm lg:text-xl ">
          Elevate your living experience to new heights with Zing-Zone. Immerse
          yourself in the art of finding the perfect abode as we present to you
          a meticulously curated selection of diverse properties. Each residence
          is thoughtfully chosen to cater to your unique preferences, ensuring
          that your journey to discover the ideal home is nothing short of
          extraordinary.
        </div>

        <Link
          to={'/search'}
          className="text-md text-white font-serif  bg-[#ff5d8f] w-fit rounded-md px-5 py-5 font-bold hover:underline"
        >
          Search Now
        </Link>
      </div> */}
      <Box w="100%">
        <Carosel></Carosel>
      </Box>

      {/* Featured Listings Slider */}
      <Swiper navigation>
        {offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div
              style={{
                background: `url(${listing.imageUrls[0]}) center no-repeat`,
                backgroundSize: 'cover',
              }}
              className="h-[500px]"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Listing Results for Offer, Sale, and Rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Explore Recent Offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={'/search?offer=true'}
              >
                View More Offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Discover Places for Rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={'/search?type=rent'}
              >
                View More Places for Rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Find Your Ideal Home for Sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={'/search?type=sale'}
              >
                View More Places for Sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
