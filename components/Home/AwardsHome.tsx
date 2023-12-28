const AwardsHome = () => {
  return (
    <div
      className='flex
                flex-col
                text-center
                bg-blue-500'
    >
      <h1 className='mt-8 text-4xl font-extrabold'>Awards</h1>
      <div className='flex flex-row'>
        <p className='text-md'>
          Better Business Bureau Grade A+ M. Stevens Roofing has received a
          grade of A+ from the Better Business Bureau. This grade recognizes
          that we have had ZERO complaints filed against us. We&apos;ve acheived
          this A+ rating by making sure our customers are always happy!
        </p>
        <div>
          <p className='text-md'>
            2011-2019 Dan&apos;s Best of the Best Since 2011 - Platinum Award We
            have received the Platinum Award from Dan&apos;s Best of the Best
            for several years running. The Platinum award recognizes M. Stevens
            Roofing as the best roofing company on Long Island. This is the top
            award given in the Roofing category, and we are the only company to
            have received it in the past few years: 2011-2019.
          </p>
        </div>
        <div>
          <p className='text-md'>
            Angie&apos;s List Super Service Award Angie&apos;s List has given us
            the Super Service Award multiple years running. This award is given
            to businesses who maintain a superior service record each year. Of
            the thousands of businesses monitored by Angie&apos;s List, only the
            top 5% qualify for a Super Service Award. Click here to see our
            business profile at Angie&apos;s List!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AwardsHome
