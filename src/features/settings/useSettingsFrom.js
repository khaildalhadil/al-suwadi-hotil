import React from 'react'
import { getSettings } from '../../services/apiSettings'
import { useQuery } from '@tanstack/react-query'

export default function useSettingsFrom() {
  const {data: setting, error, isLoading, isError} = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  })

  return {setting, error, isLoading, isError}
}
