import React from 'react'
import FormDropdown from './FormDropdown'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'

const CampaignForm = ({ formProps }) => {
  return (
    <div>
      <FormInput
        displayAs='Campaign title'
        name='title'
        type='text'
        placeholder='campaign title'
        {...formProps}
      />
      <FormTextArea
        displayAs='Description'
        name='byline'
        placeholder='write a short description (1-2 sentences) of your campaign'
        maxlength='140'
        {...formProps}
      />
      <FormDropdown
        displayAs='Category'
        name='category'
        type='select'
        placeholder='campaign title'
        options={[
          'Art',
          'Technology',
          'Food',
          'Design',
          'Fashion',
          'Music',
          'Gaming',
          'Sustainability',
          'Other'
        ]}
        {...formProps}
      />
      <FormInput
        displayAs='Location'
        name='location'
        type='text'
        placeholder='city, country i.e. London, UK'
        {...formProps}
      />
      <FormInput
        displayAs='Campaign target'
        name='target'
        type='number'
        placeholder='Your target funding in GBP'
        {...formProps}
      />
      <FormInput
        displayAs='Campaign duration'
        name='duration'
        type='number'
        placeholder='max.90 days'
        {...formProps}
      />
    </div>
  )
}

export default CampaignForm
