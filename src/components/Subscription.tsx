"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, CreditCard, Star, Award, Lock } from 'lucide-react';
import Navbar from './Navbar';
import { Adobe } from './Pricing/Adobe';
import { Canva } from './Pricing/Canva';
import { Figma } from './Pricing/Figma';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  logo: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

const SoftwareSubscriptionSite: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('adobe'); // Adobe selected by default
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const products: Product[] = [
    {
      id: 'adobe',
      name: 'Adobe Creative Cloud',
      logo: '/adobelogo.svg',
      description: 'Suite créative complète pour les professionnels'
    },
    {
      id: 'canva',
      name: 'Canva Pro',
      logo: '/canva.svg',
      description: 'Créez des designs professionnels en quelques minutes'
    },
    {
      id: 'figma',
      name: 'Figma Professional',
      logo: '/figma.webp',
      description: 'Outil de design collaboratif pour les équipes'
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.email && 
    formData.cardNumber && formData.expiryDate && formData.cvv && formData.nameOnCard;

  const renderProductComponent = () => {
    switch(selectedProduct) {
      case 'adobe':
        return <Adobe />;
      case 'canva':
        return <Canva />;
      case 'figma':
        return <Figma />;
      default:
        return <Adobe />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center w-full border">
        <div className="w-full mx-auto px-6 lg:px-8 md:px-8">
          {/* Product Selection */}
          <div className="block lg:flex justify-center pl-0 md:pl-4 items-center w-full gap-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-primary/10 rounded-2xl shadow-lg p-6 mt-10 lg:mt-0 mx-auto w-full lg:w-[60%]"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez votre abonnement</h2>
              
              {/* Product Selection */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Logiciel</h3>
                <div className="grid gap-3">
                  {products.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        selectedProduct === product.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      <div className="flex items-center space-x-3 md:space-x-5">
                        <Image src={product.logo} alt='logo' className='w-20 h-16 object-contain' height={30} width={30} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{product.name}</h4>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                        {selectedProduct === product.id && (
                          <Check className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Product Component */}
          <div className="w-full lg:w-[70%]">
            <AnimatePresence mode="wait">
              {renderProductComponent()}
            </AnimatePresence>
          </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-6 lg:px-8 md:px-8 py-12">
          {/* User Info & Payment Form */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 w-full lg:w-[50%] mx-auto"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos informations</h2>
              
              {/* User Information */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="border-t pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Paiement sécurisé</h3>
                  <div className="flex space-x-1 ml-auto">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de carte *
                    </label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        MM/AA *
                      </label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="12/28"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom sur la carte *
                    </label>
                    <input
                      type="text"
                      value={formData.nameOnCard}
                      onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="JEAN DUPONT"
                    />
                  </div>
                </div>
              </div>

              {/* Purchase Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!isFormValid}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-6 ${
                  isFormValid
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isFormValid ? 'Finaliser l\'achat' : 'Complétez les informations'}
              </motion.button>

              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>SSL</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Lock className="w-4 h-4" />
                  <span>Cryptage 256-bit</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>4.9/5 (2,847 avis)</span>
                </div>
              </div>
          </motion.div>
  
          {/* Trust Badges */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pourquoi choisir SoftHub ?</h3>
            <p className="text-gray-600">Revendeur officiel de confiance depuis 2018</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Sécurisé</h4>
              <p className="text-sm text-gray-600">Paiements cryptés SSL</p>
            </div>
            <div className="space-y-2">
              <Award className="w-8 h-8 text-green-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Certifié</h4>
              <p className="text-sm text-gray-600">Revendeur officiel</p>
            </div>
            <div className="space-y-2">
              <Check className="w-8 h-8 text-purple-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Instantané</h4>
              <p className="text-sm text-gray-600">Activation immédiate</p>
            </div>
            <div className="space-y-2">
              <Star className="w-8 h-8 text-yellow-600 mx-auto" />
              <h4 className="font-semibold text-gray-900">Support 24/7</h4>
              <p className="text-sm text-gray-600">Assistance en français</p>
            </div>
          </div>
          </motion.div>
        </div>
    </div>
  );
};

export default SoftwareSubscriptionSite;