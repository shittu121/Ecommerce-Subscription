import { Lock, Shield } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white border-b border-primary/10">
        <div className="w-full mx-auto px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-gray-900">SoftHub</span>
            </div>
            <div className="flex sm-hidden items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Revendeur Officiel</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="w-4 h-4 text-green-500" />
                <span>Paiement Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar