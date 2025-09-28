import React, { useState, useEffect, useRef } from 'react';
import type { DeepDiveFeature, PerformanceMetric } from '../types';
import { MCP_DEEP_DIVE_DATA, PERFORMANCE_METRICS_DATA } from '../constants';


const DeepDiveCard: React.FC<{ feature: DeepDiveFeature, index: number }> = ({ feature, index }) => (
    <div 
        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full"
        data-animate
        style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
                {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-blue">{feature.title}</h3>
        </div>
        <ul className="space-y-2">
            {feature.items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-brand-green font-bold mr-2 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const AnimatedMetric: React.FC<{ finalValue: string, label: string }> = ({ finalValue, label }) => {
  const [count, setCount] = useState<string | number>(0);
  const isNumeric = !isNaN(parseFloat(finalValue)) && isFinite(finalValue as any);
  const target = isNumeric ? parseFloat(finalValue) : finalValue;

  useEffect(() => {
    if (!isNumeric) {
      setCount(target);
      return;
    }
    
    let start = 0;
    const end = target as number;
    const duration = 1500;
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const current = start + (end - start) * percentage;

      if (end < 1) { // Handle decimals
        setCount(current.toFixed(1));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(finalValue.includes('%') ? `${end}%` : finalValue.includes('+') ? `${end}+` : end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [finalValue, target, isNumeric]);

  return (
    <>
      <p className="text-4xl font-extrabold text-brand-blue">
          {label === 'Latencia' && '<'}{count}{label === 'Uptime' && '%'}{label === 'Req/seg' && 'M+'}
      </p>
    </>
  );
};


const PerformanceCard: React.FC<{ metric: PerformanceMetric, index: number }> = ({ metric, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300"
            data-animate
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex justify-center mb-3">
                {metric.icon}
            </div>
            {isVisible ? <AnimatedMetric finalValue={metric.value} label={metric.label} /> : <p className="text-4xl font-extrabold text-brand-blue">0</p>}
            <p className="text-gray-600 font-semibold mt-1">{metric.label}</p>
        </div>
    );
};


const McpDeepDive: React.FC = () => {
  return (
    <section id="mcp-deep-dive" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Conector MCP - El Corazón de tu Ecosistema IA
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo el Conector MCP transforma la forma en que tus sistemas de IA interactúan con tus datos empresariales, garantizando máxima compatibilidad, seguridad y rendimiento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {MCP_DEEP_DIVE_DATA.map((feature, index) => (
            <DeepDiveCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-animate>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue">Rendimiento Excepcional</h3>
                <p className="mt-2 text-md text-gray-600">Métricas que demuestran el poder del Conector MCP en entornos empresariales reales.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {PERFORMANCE_METRICS_DATA.map((metric, index) => (
                    <PerformanceCard key={index} metric={metric} index={index} />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default McpDeepDive;